import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { EventEmitter } from 'stream';
import { AppComponent } from '../app.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  taskForm!: FormGroup;

  taskValue: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AppComponent,
    private fb: FormBuilder,

    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      task: [this.data],
    });
  }
  onSubmit() {
    this.taskValue = this.taskForm.get('task')?.value;
    console.log(this.taskValue);
    this.taskService.sendUpdatedTask(this.taskValue);
    //console.log(item);
    // this.updatedTask.emit(item);
  }
}
