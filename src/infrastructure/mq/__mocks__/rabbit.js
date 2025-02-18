import { jest } from "@jest/globals";

export const RabbitWrapper = {
    createChannel: () => Promise.resolve({
        assertQueue: jest.fn(),
        sendToQueue: jest.fn(),
    }),
}