import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //- Project Overview, Tasks, In-Progress, In-Review and
  //Completed.
  title = 'taskBoard';
  newData: number = 0;

  constructor(public dialog: MatDialog, public taskService: TaskService) {}

  editTask(task: string, key: string, index: number) {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      data: { task },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.taskService.updateTask(result, key, index);
    });
  }

  addItem(key: string) {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.taskService.addTask(result, key);
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
