import { Client } from 'pg';
export async function connectPostgres() {
    const connectionString = process.env.DATABASE_URL_POSTGRES;
    if (!connectionString) {
        throw new Error('DATABASE_URL_POSTGRES is not set');
    }
    const client = new Client({ connectionString });
    await client.connect();
    return client;
}
