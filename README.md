<div align="center">

<img src="frontend/public/Logo.png" width="120" alt="To-Do Brutal" />

# To-Do Brutal

**To-do list full stack com design brutalista, Angular 19 no front e NestJS com PostgreSQL no back.**

<br />

[![Repositório público](https://img.shields.io/badge/repo-público-2ea44f?style=flat-square&logo=github&logoColor=white)](https://github.com/oadcavalcante/to-do-brutal)

<br />

[![Angular 19](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logoColor=fff&logo=angular)](https://github.com/oadcavalcante/to-do-brutal)

[![NestJS 11](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logoColor=fff&logo=nestjs)](https://github.com/oadcavalcante/to-do-brutal)

[![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?style=flat-square&logoColor=fff&logo=typeorm)](https://github.com/oadcavalcante/to-do-brutal) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logoColor=fff&logo=postgresql)](https://github.com/oadcavalcante/to-do-brutal)

[![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=flat-square&logoColor=fff&logo=reactivex)](https://github.com/oadcavalcante/to-do-brutal) [![class-validator](https://img.shields.io/badge/class_validator-555555?style=flat-square)](https://github.com/oadcavalcante/to-do-brutal) [![class-transformer](https://img.shields.io/badge/class_transformer-555555?style=flat-square)](https://github.com/oadcavalcante/to-do-brutal) [![Concurrently](https://img.shields.io/badge/Concurrently-555555?style=flat-square)](https://github.com/oadcavalcante/to-do-brutal) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logoColor=fff&logo=typescript)](https://github.com/oadcavalcante/to-do-brutal)

<br />

[Stack completa ↓](#stack)

<br />

[Documentação](https://github.com/oadcavalcante/to-do-brutal/blob/main/README.md) · [Deploy](#deploy) · [API](http://localhost:3000/api/todos) · [Issues](https://github.com/oadcavalcante/to-do-brutal/issues)

</div>

## Features

- ✨ CRUD completo de tarefas com API REST
- 🚀 Drag and drop para reordenar tarefas
- ⚡ Busca, filtro e ordenação de tarefas
- 🎯 Tema claro e escuro
- 🔧 Persistência em PostgreSQL via TypeORM
- 📦 Monorepo com scripts unificados na raiz

## Getting Started

| Ambiente | Comando / Link |
|----------|----------------|
| Primeira vez | `npm run install:all` |
| Documentação | [README](https://github.com/oadcavalcante/to-do-brutal/blob/main/README.md) |
| Produção | N/A |

## Stack

- **Frontend:** Angular 19
- **Backend:** NestJS 11
- **Dados:** TypeORM, PostgreSQL
- **Outros:** RxJS, class-validator, class-transformer, Concurrently, TypeScript

---

## 📦 Estrutura do Projeto

```
to-do-brutal/
├── frontend/     # Frontend em Angular 19
│   ├── src/
│   ├── package.json
│   ├── angular.json
│   └── ...
│
├── backend/      # Backend em NestJS + TypeORM + PostgreSQL
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
git clone https://github.com/oadcavalcante/to-do-brutal.git
cd to-do-brutal
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
to-do-brutal-backend/.env
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
