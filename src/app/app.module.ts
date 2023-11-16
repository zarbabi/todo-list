import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TodoComponent } from './components/todo/todo.component';
import { DoneTodoComponent } from './components/done-todo/done-todo.component';
import {TodoService} from "./services/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DoneTodoComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
