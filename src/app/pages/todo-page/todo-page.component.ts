import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
id!:number;
todo:Todo | null=null;

constructor(activeRoute:ActivatedRoute,private todoService:TodoService) {
  activeRoute.params.subscribe(value => this.id=value['id'])
  this.loadTodo();
}

loadTodo(){
const todo=this.todoService.getTodo(this.id);
if (todo==undefined)
  alert('todo not found');
this.todo=todo!;
}
}
