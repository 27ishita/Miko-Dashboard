import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  updatedTask = new Subject<any>();
  newTask = new Subject<any>();

  constructor() {}

  sendUpdatedTask(task: any) {
    this.updatedTask.next(task);
  }

  addTask(task: any) {
    this.newTask.next(task);
  }
}
