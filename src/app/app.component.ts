import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  form:FormGroup;

  tasks:string[]=[]
  doneTasks:string[]=[]
   constructor(fb:FormBuilder) {
   this.form=fb.group({
     'task':[null,[Validators.required, Validators.minLength(3)]]
   })
   }
removeTask(task:string){
  const index=  this.tasks.findIndex(x=>x==task)
  this.tasks.splice(index,1)
}
doneTask(item:string){
    this.doneTasks.push(item);
    this.removeTask(item);
}
   createTask(){
     const task=this.form.value.task;
     if (this.form.invalid){
       alert('please enter task');
       return;
     }
     this.tasks.push(task);
     this.form.reset();
   }
}
