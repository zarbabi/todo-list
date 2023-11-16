import { Injectable } from '@angular/core';
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:Todo[]=[];
  public get currentTodos() :Todo[] {
    return this.todos.filter(x=> !x.done)
  }
  public get doneTodos() :Todo[] {
    return this.todos.filter(x=> x.done)
  }

  saveTodos(){
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  public createTodo(todo:Todo){
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
  constructor() { }
}
