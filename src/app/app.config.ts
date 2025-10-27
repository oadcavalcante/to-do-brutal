import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TodosRepository } from './core/ports/todos.repository';
import { LocalStorageTodosRepository } from './data/local-storage-todos.repository';
// import { HttpTodosRepository } from './data/http-todos.repository'; // quando for usar backend

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // ===== Troque aqui quando ligar o backend =====
    { provide: TodosRepository, useExisting: LocalStorageTodosRepository },
    // { provide: TodosRepository, useExisting: HttpTodosRepository },
  ],
};
