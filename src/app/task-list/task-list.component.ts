import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'tasks-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(public data: DataService) { 
    console.log("constructor", this.tasks);
  }

  ngOnInit(): void {
    console.log("before", this.tasks);
    this.tasks = this.data.getTaskList();
    console.log("after", this.tasks);
  }

  tasks: any[] = [];
//   tasks: any[] = [{ id: 1, value: "Tarea 1" },
//   { id: 1, value: "Tarea 2" },
//   { id: 3, value: "Tarea 3" },
//   { id: 4, value: "Tarea 4" },
//   { id: 5, value: "Tarea 5" },
//   { id: 6, value: "Tarea 6" },
//   { id: 7, value: "Tarea 7" },
//   { id: 8, value: "Tarea 8" },
//   { id: 9, value: "Tarea 9" },
//   { id: 10, value: "Tarea 10" },
//   { id: 11, value: "Tarea 11" },
//   { id: 12, value: "Tarea 12" },
//   { id: 13, value: "Tarea 13" },
//   { id: 14, value: "Tarea 14" },
//   { id: 15, value: "Tarea 15" },
//   { id: 16, value: "Tarea 16" },
//   { id: 17, value: "Tarea 17" },
// ]

  // Add Task
  addTask(newTask: any) {
    console.log(newTask);
    this.tasks.unshift({ id: this.tasks.length + 1, value: newTask }); // Lo coloca al principio del arreglo y el id +1 del final
    console.log(newTask);
  }

  // Delete Task
  deleteTask(taskToDelete: any) {
    this.tasks.splice(this.tasks.indexOf(taskToDelete), 1);
  }

  

}