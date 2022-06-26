import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addTaskForm!: FormGroup;
  task: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AppComponent,
    private fb: FormBuilder,

    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.addTaskForm = this.fb.group({
      taskDetails: [''],
    });
  }

  addNewTask() {
    this.task = this.addTaskForm.get('taskDetails')?.value;
    this.taskService.addTask(this.task);
  }
}
