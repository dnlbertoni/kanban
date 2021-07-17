import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListSchema, TaskSchema } from './../../../core';
import { TaskService } from 'src/app/core/services/task.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list!: ListSchema;
  @Output() editTask: EventEmitter<TaskSchema> = new EventEmitter();

  constructor(public tasksService: TaskService) {}

  ngOnInit(): void {}

  handleEdit(task: TaskSchema){
    if (this.list) {
      task.listId = this.list.id;
      this.editTask.emit(task);
    }
  }
}
