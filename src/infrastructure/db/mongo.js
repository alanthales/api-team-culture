import { MongoClient } from "mongodb";

export class MongoWrapper {
    static #connection;

    static async getDb() {
        if (!this.#connection) {
            this.#connection = new MongoClient(process.env.MONGO_HOST);
            await this.#connection.connect();
        }
        return this.#connection.db(process.env.MONGO_DB);
    }
}