import { Component } from '@angular/core';
import {Tasks} from './models/tasks'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskArray: Tasks[] = [
    {id:232, title:"First task"},
    {id:233, title:"Second task"},
    {id:234, title:"Third task"}
  ];

  
}
