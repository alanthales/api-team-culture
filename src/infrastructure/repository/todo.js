import { ObjectId } from "mongodb";
import { MongoWrapper } from "../db/mongo.js";

const COLLECTION = "parafazer";

export const todoRepository = {
    async add(todo) {
        const db = await MongoWrapper.getDb();
        await db.collection(COLLECTION).insertOne(todo);
        return todo;
    },

    async listTodos() {
        const db = await MongoWrapper.getDb();
        return db.collection(COLLECTION).find().toArray();
    },

    async update(id, todo) {
        const db = await MongoWrapper.getDb();
        const _id = new ObjectId(id);
        const collection = await db.collection(COLLECTION);

        const old = await collection.findOne({ _id });

        if (!old) {
            return null;
        }

        return collection.replaceOne({ _id }, { ...old, ...todo });
    },

    async delete(id) {
        const db = await MongoWrapper.getDb();
        const _id = new ObjectId(id);
        return db.collection(COLLECTION).deleteOne({ _id });
    },
}