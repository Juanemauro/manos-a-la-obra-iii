import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTaskList() { /* Podría ser un getTaskDetails(id: number) y obtener de alguna forma obtener el detalle de la tarea dentro del array */
    return [
      { id: 1, value: "Tarea 1" },
      { id: 1, value: "Tarea 2" },
      { id: 3, value: "Tarea 3" },
      { id: 4, value: "Tarea 4" },
      { id: 5, value: "Tarea 5" },
      { id: 6, value: "Tarea 6" },
      { id: 7, value: "Tarea 7" },
      { id: 8, value: "Tarea 8" },
      { id: 9, value: "Tarea 9" },
      { id: 10, value: "Tarea 10" },
      { id: 11, value: "Tarea 11" },
      { id: 12, value: "Tarea 12" },
      { id: 13, value: "Tarea 13" },
      { id: 14, value: "Tarea 14" },
      { id: 15, value: "Tarea 15" },
      { id: 16, value: "Tarea 16" },
      { id: 17, value: "Tarea 17" },
      { id: 17, value: "Funcionaaaaa" },
    ]
  }
  
}
