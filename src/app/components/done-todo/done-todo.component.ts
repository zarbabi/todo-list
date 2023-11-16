import {Component, Input} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-done-todo',
  templateUrl: './done-todo.component.html',
  styleUrls: ['./done-todo.component.css']
})
export class DoneTodoComponent {
  @Input({required: true})
todo!:Todo;
}
