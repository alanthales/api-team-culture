import { todoRepository } from "../../infrastructure/repository/todo.js";
import { RabbitWrapper } from "../../infrastructure/mq/rabbit.js";

const QUEUE = "todo_queue";

export const todoService = {
    async add(todo) {
        const result = await todoRepository.add(todo);
        const channel = await RabbitWrapper.createChannel();

        channel.assertQueue(QUEUE, {
            durable: false
        });
      
        const message = JSON.stringify(result);
        channel.sendToQueue(QUEUE, Buffer.from(message));

        return result;
    },

    findAll() {
        return todoRepository.listTodos();
    },

    update(id, data) {
        return todoRepository.update(id, data);
    },

    delete(id) {
        return todoRepository.delete(id);
    },
}