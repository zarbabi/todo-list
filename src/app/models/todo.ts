export interface Todo {
  id:number;
  title: string;
  done:boolean;
  createAt:Date;
  doneAt : Date | null;
}
