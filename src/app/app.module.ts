import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TodoComponent } from './components/todo/todo.component';
import { DoneTodoComponent } from './components/done-todo/done-todo.component';
import {TodoService} from "./services/todo.service";
import { CreateTodoPageComponent } from './pages/create-todo-page/create-todo-page.component';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DoneTodoComponent,
    CreateTodoPageComponent,
    TodoListPageComponent,
    HomePageComponent,
    TodoPageComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    AppRoutingModule,

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
