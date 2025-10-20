import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectPostgres } from './lib/postgres.js';
import { connectMongo } from './lib/mongo.js';
const app = express();
app.use(cors());
app.use(express.json());
const port = Number(process.env.PORT || 3000);
app.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'api', time: new Date().toISOString() });
});
app.get('/db/pg/ping', async (_req, res) => {
    try {
        const client = await connectPostgres();
        const result = await client.query('SELECT 1 as ok');
        await client.end();
        res.json({ ok: result.rows[0].ok === 1 });
    }
    catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
});
app.get('/db/mongo/ping', async (_req, res) => {
    try {
        const conn = await connectMongo();
        const db = conn.connection.db;
        if (!db) {
            throw new Error('Mongo connection has no db reference');
        }
        const admin = db.admin();
        const info = await admin.ping();
        await conn.disconnect();
        res.json({ ok: true, info });
    }
    catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
});
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API listening on http://localhost:${port}`);
});
