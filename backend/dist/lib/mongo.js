import mongoose from 'mongoose';
export async function connectMongo() {
    const uri = process.env.DATABASE_URL_MONGO;
    if (!uri) {
        throw new Error('DATABASE_URL_MONGO is not set');
    }
    await mongoose.connect(uri);
    return mongoose;
}
