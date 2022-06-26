import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addTaskForm!: FormGroup;

  get isAdd(): boolean {
    return !this.data?.task;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddTaskComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addTaskForm = this.fb.group({
      taskDetails: [this.data?.task],
    });
  }

  addNewTask() {
    const task = this.addTaskForm.get('taskDetails')?.value;

    this.dialogRef.close(task);
  }
}
