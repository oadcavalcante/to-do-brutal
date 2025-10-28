# To-Do List no Estilo Brutalista

![screenshot](https://github.com/oadcavalcante/todo-brutal/blob/main/public/ScreenShot.png)

## Backend NestJS

Foi adicionada uma API simples utilizando [NestJS](https://nestjs.com/) para persistir os dados da aplicação. Ela expõe os seguintes endpoints REST sob o prefixo `/api`:

- `GET /api/todos` — lista todas as tarefas.
- `POST /api/todos` — cria uma nova tarefa.
- `PATCH /api/todos/:id` — atualiza campos parciais de uma tarefa existente.
- `DELETE /api/todos/:id` — remove uma tarefa.
- `POST /api/todos/clear-completed` — exclui todas as tarefas concluídas.
- `POST /api/todos/reorder` — reordena as tarefas de acordo com a lista de IDs enviada.

### Como executar

```bash
cd server
npm install
npm run start:dev
```

A API ficará disponível em `http://localhost:8080/api`. Certifique-se de que o front-end está configurado para apontar para essa URL (já definido em `src/environments/environment.ts`).
