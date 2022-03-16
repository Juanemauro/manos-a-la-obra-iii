import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks: any[] = [{ id: 1, value: "Tarea 1" }, { id: 1, value: "Tarea 2" }, { id: 3, value: "Tarea 3" }]

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