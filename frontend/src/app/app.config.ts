import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TodosRepository } from './core/ports/todos.repository';
import { HttpTodosRepository } from './data/http-todos.repository';
import { LocalStorageTodosRepository } from './data/local-storage-todos.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    // Troque abaixo quando for usar o backend.
    // { provide: TodosRepository, useExisting: HttpTodosRepository },
    { provide: TodosRepository, useExisting: LocalStorageTodosRepository },
  ],
};
