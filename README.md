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

```
todo-brutal/
├── todo-brutal-frontend/     # Frontend em Angular 19
│   ├── src/
│   ├── package.json
│   ├── angular.json
│   └── ...
│
├── todo-brutal-backend/      # Backend em NestJS + TypeORM + PostgreSQL
│   ├── src/
│   ├── package.json
│   └── ...
│
├── package.json              # Scripts unificados (opcional)
└── README.md
```

---

## 🚀 Tecnologias Utilizadas

### 🖥️ **Frontend**

- Angular 19 (Standalone Components + Signals)
- RxJS 7+
- TailwindCSS / SCSS
- Angular CDK (Drag & Drop)
- Arquitetura baseada em Services e Repositories
- Design System Brutalista

### ⚙️ **Backend**

- NestJS 10
- TypeORM
- PostgreSQL
- DTOs com class-validator / class-transformer
- Arquitetura modular (TodosModule)
- Boas práticas REST

---

## 🧩 Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/todo-brutal.git
cd todo-brutal
```

---

### 2️⃣ Instale as dependências de todo o projeto

Com um único comando na raiz:

```bash
npm run install:all
```

---

### 3️⃣ Configure o banco de dados (PostgreSQL)

Crie um banco chamado `todo_brutal` e configure suas credenciais no arquivo:

```
todo-brutal-backend/.env
```

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASS=root
DATABASE_NAME=todo_brutal
```

---

### 4️⃣ Inicie a aplicação completa (Front + Back)

Na raiz do projeto, execute:

```bash
npm start

```

Isso executa simultaneamente:

- Frontend → http://localhost:4200
- Backend → http://localhost:3000/api

---

## 🧠 Funcionalidades

✅ Criar tarefas  
✅ Editar título da tarefa  
✅ Marcar como concluída  
✅ Reordenar tarefas (Drag & Drop)  
✅ Buscar, filtrar e ordenar  
✅ Alternar entre tema claro/escuro  
✅ Excluir tarefas concluídas  
✅ Persistência completa no PostgreSQL

---

## 🧰 Endpoints Principais (API REST)

| Método   | Endpoint                     | Descrição                     |
| -------- | ---------------------------- | ----------------------------- |
| `GET`    | `/api/todos`                 | Lista todas as tarefas        |
| `GET`    | `/api/todos/:id`             | Retorna uma tarefa            |
| `POST`   | `/api/todos`                 | Cria uma nova tarefa          |
| `PATCH`  | `/api/todos/:id`             | Atualiza uma tarefa           |
| `DELETE` | `/api/todos/:id`             | Remove uma tarefa             |
| `DELETE` | `/api/todos/clear-completed` | Remove todas as concluídas ✅ |

---

## 🧪 Comandos Úteis

| Ação           | Comando             |
| -------------- | ------------------- |
| Rodar o front  | `npm start`         |
| Rodar o back   | `npm run start:dev` |
| Build do front | `npm run build`     |
| Build do back  | `npm run build`     |
| Lint (Angular) | `npm run lint`      |
| Testes (Nest)  | `npm run test`      |

---

## 🧑‍💻 Autor

**Aderbal Cavalcante**  
Desenvolvedor Full Stack e Militar 🇧🇷  
[GitHub](https://github.com/oadcavalcante) • [LinkedIn](https://linkedin.com/in/oadcavalcante)

---

## 📜 Licença

Este projeto está sob a licença **MIT** — sinta-se livre para usar e modificar.  
Feito com 💻 + ☕ + 🧠 por **Aderbal Cavalcante**.
