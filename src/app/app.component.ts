import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from "./models/todo";
import {TodoService} from "./services/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  form:FormGroup;
  currentId=1;




   constructor(fb:FormBuilder, public todoService:TodoService) {
   this.form=fb.group({
     'task':[null,[Validators.required, Validators.minLength(3)]]
   })
   //   if (localStorage.getItem('todos')){
   //   this.todos=JSON.parse(localStorage.getItem('todos')!);
   // }
      }
   createTask(){
    const task=this.form.value.task;
    if (this.form.invalid){
      alert('please enter task');
      return;
    }
    const todo:Todo ={
      id:this.currentId++,
      title:task,
      createAt: new Date(),
      done:false,
      doneAt:null
    }
    this.todoService.createTodo(todo);
    this.form.reset();

  }

}
