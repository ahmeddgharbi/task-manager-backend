# Task Manager Backend

A REST API built with NestJS to manage tasks.

## Features
- CRUD operations for tasks
- Assign users to tasks


## Architectural Decisions

- Used NestJS modules to separate concerns (Tasks, Users)
- TypeScript for type safety  
- Jest for testing  
- Used DTOs for input validation 
- Used in-memory array for simplicity


## Endpoints

| Method | Endpoint | Description |
|--------|-----------|--------------|
| GET | `/tasks` | List all tasks |
| POST | `/tasks` | Create task |
| PATCH | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |
| POST | `/tasks/:id/assign` | Assign users to a task |


## Setup
```bash
npm install
npm run start:dev
