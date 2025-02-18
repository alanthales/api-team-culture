import { expect, jest, test } from "@jest/globals";
import { todoRepository } from "../../../src/infrastructure/repository/todo.js";

jest.mock("../../../src/infrastructure/db/mongo.js");

test("addTest", async () => {
    const result = await todoRepository.add({});
    expect(result).not.toBe(null);
})

test("listTodosTest", async () => {
    const result = await todoRepository.listTodos();
    expect(result).toHaveLength(0);
})

test("updateTest", async () => {
    const result = await todoRepository.update("id", {});
    expect(result).not.toBe(null);
})

test("deleteTest", async () => {
    const result = await todoRepository.delete("id");
    expect(result).not.toBe(null);
})
