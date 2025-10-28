import { Routes } from '@angular/router';
import { TodoPageComponent } from './features/todos/todo-page.component';

export const routes: Routes = [
  { path: '', component: TodoPageComponent },
  { path: '**', redirectTo: '' },
];
