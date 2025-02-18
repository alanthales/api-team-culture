import { jest, test } from "@jest/globals";
import { RabbitWrapper } from "../../../src/infrastructure/mq/rabbit.js";

jest.mock("amqplib", () => ({
    connect: () => Promise.resolve({
        createChannel: () => {},
    }),
}));

test("RabbitWrapper.createChannelTest", async () => {
    const channel = await RabbitWrapper.createChannel();
    expect(channel).not.toBe(null);
});