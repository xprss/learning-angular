import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaskDTO } from '../../dto/TaskDTO';
import { CommonModule } from '@angular/common';
import { TotagPipe } from '../../pipes/totag.pipe';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, TotagPipe],
  providers: [TaskService],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() currentTask: TaskDTO | undefined = undefined
  @Input() isDetailsOpened: boolean = false;
  @Output() closeDetailsEmitter: EventEmitter<void> = new EventEmitter<void>()

  constructor(private readonly taskService: TaskService) {}

  duplicate() {
    this.taskService.duplicateTask(this.currentTask!!)
  }

  close() {
    this.currentTask = undefined
    this.closeDetailsEmitter.emit()
  }
}
