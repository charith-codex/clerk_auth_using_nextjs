import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConn {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cashed: MongooseConn = (global as any).mongoose

if (!cashed) {
    cashed = (global as any).mongoose = {
        conn: null,
        promise: null
    }
}

export const connect = async () => {
    if (cashed.conn) {
        return cashed.conn
    }

    cashed.promise =
        cashed.promise || mongoose.connect(MONGODB_URL, {
            dbName: 'clerkauthv5',
            bufferCommands: false,
            connectTimeoutMS: 30000,
        })

    cashed.conn = await cashed.promise

    return cashed.conn
}
