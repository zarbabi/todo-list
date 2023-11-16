import {Component, Input} from '@angular/core';
import {Todo} from "../../models/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!:Todo;

  constructor(private todoService:TodoService) {
  }

  doneTask(id:number){
    this.todoService.doneTask(id);
  }

  deleteTask(id:number){
    this.todoService.removeTask(id);
  }
}
