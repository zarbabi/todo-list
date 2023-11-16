import { Component } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent {
  constructor(public todoService:TodoService) {
  }

}
