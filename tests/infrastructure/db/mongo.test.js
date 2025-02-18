import { jest, test } from "@jest/globals";
import { MongoWrapper } from "../../../src/infrastructure/db/mongo.js";

jest.mock("mongodb", () => ({
    MongoClient: jest.fn().mockImplementation(() => ({
        connect: () => Promise.resolve({}),
        db: () => {},
    })),
}));

test("MongoWrapper.getDbTest", async () => {
    const db = await MongoWrapper.getDb();
    expect(db).not.toBe(null);
});