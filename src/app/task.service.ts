import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  updatedTask = new Subject<any>();
  // newTask = new Subject<any>();
  projectOverview = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ];

  tasks = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];
  inProgress = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];

  inReview = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];
  completed = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];

  constructor() {}

  sendUpdatedTask(task: any) {
    this.updatedTask.next(task);
  }

  addTask(task: string, key: string) {
    switch (key) {
      case 'projectOverview':
        this.projectOverview.push(task);
        break;
      case 'tasks':
        this.tasks.push(task);
        break;
      case 'inProgress':
        this.tasks.push(task);
        break;
      case 'inReview':
        this.tasks.push(task);
        break;
      case 'completed':
        this.tasks.push(task);
        break;

      default:
        break;
    }
  }
  updateTask(task: string, key: string, index: number) {
    switch (key) {
      case 'projectOverview':
        this.projectOverview[index] = task;
        break;
      case 'tasks':
        this.tasks[index] = task;
        break;
      case 'inProgress':
        this.inProgress[index] = task;
        break;
      case 'inReview':
        this.inReview[index] = task;
        break;
      case 'completed':
        this.completed[index] = task;
        break;

      default:
        break;
    }
  }
}
