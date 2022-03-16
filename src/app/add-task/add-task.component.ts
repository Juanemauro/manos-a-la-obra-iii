import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() newTask = new EventEmitter<any>();
  constructor() { }
  nombre = "Juan";
  ngOnInit(): void {
  }

  addTask(nuevaTarea: any){
    console.log(nuevaTarea);
    this.newTask.emit(nuevaTarea);
    console.log(nuevaTarea);
  } 

}
