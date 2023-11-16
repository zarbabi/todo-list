import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CreateTodoPageComponent} from "./pages/create-todo-page/create-todo-page.component";
import {TodoListPageComponent} from "./pages/todo-list-page/todo-list-page.component";
import {TodoPageComponent} from "./pages/todo-page/todo-page.component";


const routes:Routes= [
  {path:'', component:HomePageComponent},
  {path:'new', component:CreateTodoPageComponent},
  {path:'list', component:TodoListPageComponent},
  {path:'todo/:id', component:TodoPageComponent}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }




