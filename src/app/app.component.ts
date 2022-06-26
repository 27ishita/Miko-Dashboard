import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';
import { DialogComponent } from './dialog/dialog.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  //- Project Overview, Tasks, In-Progress, In-Review and
  //Completed.
  title = 'taskBoard';
  newData: number = 0;

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
  constructor(public dialog: MatDialog, public taskService: TaskService) {}
  ngOnDestroy(): void {
    this.taskService.newTask.unsubscribe();
  }

  editTask(editItem: any, idx: any, arr: any) {
    this.dialog.open(DialogComponent, {
      data: editItem,
      width: '250px',
    });
    this.taskService.updatedTask.subscribe((data) => {
      arr[idx] = data;
      console.log(data);
    });
  }
  addItem(arr: any) {
    this.dialog.open(AddTaskComponent, {
      width: '250px',
    });
    this.taskService.newTask.subscribe((data) => {
      arr.push(data);
      console.log(`data=${data}`);
    });
  }
  deleteTask(index: any, arr: any) {
    if (index > -1) arr.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
