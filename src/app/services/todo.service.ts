import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }
  getTodoList(){
this.todoList = this.firebasedb.list('titles')
return this.todoList;
  }

  addTodo(title: string){
this.todoList.push({
  title:title,
  isChecked: false
})
  }
  udpdateTodo($key: string, flag: boolean){
this.todoList.update($key, {isChecked: flag})
  }
  deleteTodo($key){
    this.todoList.remove($key)
  }
}
