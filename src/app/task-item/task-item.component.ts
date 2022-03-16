import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: any = ''; // recibe datos del padre (app.component.ts)
  //@Input() tasks: any = '';
  @Output() deletedTask = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(taskToDelete: any) {
    this.deletedTask.emit(taskToDelete);
  }
 

}
