import { expect, jest, test } from "@jest/globals";
import { todoService } from "../../../src/domain/service/todo.js";

jest.mock("../../../src/infrastructure/mq/rabbit.js");
jest.mock("../../../src/infrastructure/repository/todo.js", () => ({
    todoRepository: {
        add: (todo) => Promise.resolve(todo),
        listTodos: () => Promise.resolve([]),
        update: () => Promise.resolve({}),
        delete: () => Promise.resolve({}),
    }
}));

test("addTest", async () => {
    const result = await todoService.add({});
    expect(result).not.toBe(null);
})

test("findAllTest", async () => {
    const result = await todoService.findAll();
    expect(result).toHaveLength(0);
})

test("updateTest", async () => {
    const result = await todoService.update("id", {});
    expect(result).not.toBe(null);
})

test("deleteTest", async () => {
    const result = await todoService.delete("id");
    expect(result).not.toBe(null);
})