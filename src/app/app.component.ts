import { Component } from '@angular/core';
import {Tasks} from './models/tasks'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskArray: Tasks[] = [
    
  ];
  selectedTask: Tasks = new Tasks();
  addOrEdit(){
    if(this.selectedTask.id === 0){
    this.selectedTask.id = this.taskArray.length + 1;
    this.taskArray.push(this.selectedTask);
    
    }
    this.selectedTask = new Tasks;
  };
  openEdit(tasks: Tasks){
    this.selectedTask = tasks;
  }
  delete(){
    if(confirm("Are you sure?")){
    this.taskArray = this.taskArray.filter(x => x != this.selectedTask );
    this.selectedTask = new Tasks;
    }
  }
}
