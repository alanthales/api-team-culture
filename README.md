# api-team-culture
Simple rest api with mongodb and rabbitmq.
All todo's added are sent to a rabbitmq queue

Queue consumer project:
[process-team-culture]()

Run with:
```
npm run start
```

## todo api
Get all todo's:
```
curl http://localhost:3000/todo
```

Post todo:
```
curl -X POST \ 
  -H "Content-Type: application/json" \
  -d '{"title":"tarefa1","description":"descricao1","completed":false}' \
  http://localhost:3000/todo
```

Update todo:
```
curl -X PUT -H "Content-Type: application/json" -d '{"completed":true}' http://localhost:3000/todo/67b4d08470c095989a6acdbb
```

Delete todo:
```
curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/todo/67b4d08470c095989a6acdbb
```
