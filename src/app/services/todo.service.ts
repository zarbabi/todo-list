import { Injectable } from '@angular/core';
import {Todo} from "../models/todo";
import {StorageModel} from "../models/storage-model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:Todo[]=[];
  private currentId=1;

  public get currentTodos() :Todo[] {
    return this.todos.filter(x=> !x.done)
  }
  public get doneTodos() :Todo[] {
    return this.todos.filter(x=> x.done)
  }

  saveTodos(){
    const data : StorageModel={
      currentId:this.currentId,
      todos:this.todos

    }
    localStorage.setItem('data', JSON.stringify(data))
  }
  public createTodo(title:string){
    const todo:Todo ={
      id:this.currentId++,
      title:title,
      createAt: new Date(),
      done:false,
      doneAt:null
    }
    this.todos.push(todo);
    this.saveTodos();
  }


  public removeTask(id:number){
    const index=  this.todos.findIndex(x=>x.id==id)
    this.todos.splice(index,1)
    this.saveTodos();
  }
  public doneTask(id:number){
    const todo = this.todos.find(x=>x.id==id)!;
    todo.done=true;
    todo.doneAt=new Date();
    this.saveTodos();
  }
  constructor() {

      if (localStorage.getItem('data')){
      const data=JSON.parse(localStorage.getItem('data')!)as StorageModel;
        this.todos=data.todos;
        this.currentId=data.currentId;
    }
  }
}
