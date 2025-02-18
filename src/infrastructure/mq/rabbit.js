import { connect } from "amqplib";

export class RabbitWrapper {
    static #connection;

    static async createChannel() {
        if (!this.#connection) {
            this.#connection = await connect(process.env.RABBIT_HOST);
        }

        return this.#connection.createChannel();
    }
}