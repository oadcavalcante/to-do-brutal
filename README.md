<h1 align="center">🧠 TODO BRUTAL</h1>
<p align="center">
  <strong>Aplicação Full Stack com Angular 19 + NestJS + PostgreSQL</strong><br/>
  Design Brutalista • CRUD Completo • Estrutura Monorepo
</p>

<p align="center">
  <img src="https://img.shields.io/badge/angular-19-red?style=for-the-badge&logo=angular" alt="Angular"/>
  <img src="https://img.shields.io/badge/nestjs-10-E0234E?style=for-the-badge&logo=nestjs" alt="NestJS"/>
  <img src="https://img.shields.io/badge/postgresql-15-blue?style=for-the-badge&logo=postgresql" alt="PostgreSQL"/>
</p>

---

## 📦 Estrutura do Projeto

todo-brutal/
├── todo-brutal-frontend/ # Frontend em Angular 19
│ ├── src/
│ ├── package.json
│ ├── angular.json
│ └── ...
│
├── todo-brutal-backend/ # Backend em NestJS + TypeORM + PostgreSQL
│ ├── src/
│ ├── ormconfig.ts
│ ├── package.json
│ └── ...
│
├── package.json # Scripts unificados (opcional)
└── README.md

---

## 🚀 Tecnologias Utilizadas

### 🖥️ **Frontend**

- **Angular 19 (Standalone Components + Signals)**
- **RxJS 7+**
- **TailwindCSS / SCSS**
- **Angular CDK (Drag & Drop)**
- **Arquitetura baseada em Services e Repositories**
- **Design System Brutalista**

### ⚙️ **Backend**

- **NestJS 10**
- **TypeORM**
- **PostgreSQL**
- **DTOs com class-validator / class-transformer**
- **Arquitetura modular (TodosModule)**
- **Boas práticas REST**

---

## 🧩 Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/todo-brutal.git
cd todo-brutal
```

2️⃣ Instale as dependências

Frontend
cd todo-brutal-frontend
npm install

Backend
cd ../todo-brutal-backend
npm install

3️⃣ Configure o banco de dados (PostgreSQL)
Crie um banco chamado todo_brutal e configure suas credenciais no arquivo:

todo-brutal-backend/.env

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASS=postgres
DATABASE_NAME=todo_brutal

4️⃣ Rode os servidores

Backend
cd todo-brutal-backend
npm run start:dev

Servidor: http://localhost:3000/api

Frontend
cd ../todo-brutal-frontend
npm run start

Aplicação: http://localhost:4200

💡 Dica: rodar os dois ao mesmo tempo

Na raiz do projeto (todo-brutal/), crie um package.json com:

{
"private": true,
"scripts": {
"start:frontend": "cd todo-brutal-frontend && npm start",
"start:backend": "cd todo-brutal-backend && npm run start:dev",
"dev": "concurrently \"npm run start:backend\" \"npm run start:frontend\""
},
"devDependencies": {
"concurrently": "^9.0.0"
}
}

Agora é só rodar:
npm run dev

🧠 Funcionalidades

✅ Criar tarefas
✅ Editar título da tarefa
✅ Marcar como concluída
✅ Reordenar tarefas (Drag & Drop)
✅ Buscar, filtrar e ordenar
✅ Alternar entre tema claro/escuro
✅ Excluir tarefas concluídas
✅ Persistência completa no PostgreSQL

🧰 Endpoints Principais (API REST)
Método Endpoint Descrição
GET /api/todos Lista todas as tarefas
GET /api/todos/:id Retorna uma tarefa
POST /api/todos Cria uma nova tarefa
PATCH /api/todos/:id Atualiza uma tarefa
DELETE /api/todos/:id Remove uma tarefa
DELETE /api/todos/clear-completed Remove todas as concluídas ✅

🧪 Comandos Úteis
Ação Comando
Rodar o front npm start
Rodar o back npm run start:dev
Build do front npm run build
Build do back npm run build
Lint (Angular) npm run lint
Testes (Nest) npm run test

🧑‍💻 Autor

Aderbal Cavalcante
Desenvolvedor Full Stack e Militar 🇧🇷
GitHub
• LinkedIn

📜 Licença

Este projeto está sob a licença MIT — sinta-se livre para usar e modificar.
Feito com 💻 + ☕ + 🧠 por Aderbal Cavalcante.
