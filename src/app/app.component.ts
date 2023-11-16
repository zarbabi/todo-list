import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from "./models/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  form:FormGroup;
  currentId=1;

  private todos:Todo[]=[];

  get currentTodos() :Todo[] {
    return this.todos.filter(x=> !x.done)
  }
  get doneTodos() :Todo[] {
    return this.todos.filter(x=> x.done)
  }
   constructor(fb:FormBuilder) {
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
     const todo:Todo ={
       id:this.currentId++,
       title:task,
       createAt: new Date(),
       done:false,
       doneAt:null
     }

     this.todos.push(todo);
     this.form.reset();
   }


  removeTask(id:number){
    const index=  this.todos.findIndex(x=>x.id==id)
    this.todos.splice(index,1)
  }
  doneTask(id:number){
    const todo = this.todos.find(x=>x.id==id)!;
    todo.done=true;
    todo.doneAt=new Date();
  }
}
