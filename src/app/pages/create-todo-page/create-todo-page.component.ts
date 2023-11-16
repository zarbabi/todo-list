import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../../services/todo.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-create-todo-page',
  templateUrl: './create-todo-page.component.html',
  styleUrls: ['./create-todo-page.component.css']
})
export class CreateTodoPageComponent {
  form:FormGroup;

  constructor(fb:FormBuilder, public todoService:TodoService, private router:Router) {
    this.form=fb.group({
      'task':[null,[Validators.required, Validators.minLength(3)]]
    })

  }

  createTask(){
    const task=this.form.value.task;
    if (this.form.invalid){
      alert('please enter task');
      return;
    }

    this.todoService.createTodo(task);
    this.form.reset();

    this.router.navigate(['/list']);
  }

}
