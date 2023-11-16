import {Todo} from "./todo";

export interface StorageModel{
  todos:Todo[];
  currentId: number;
}
