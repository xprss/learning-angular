import { Component, Input } from '@angular/core';
import { TaskDTO } from '../../dto/TaskDTO';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../dto/FilterEnum';
import { LOADING_LABEL } from '../../services/labels.data';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() tasks: TaskDTO[] = []
  @Input() currentTask: TaskDTO | undefined = undefined
  @Input() currentFilter: FilterEnum = FilterEnum.ALL
  @Input() loading: boolean = true
  @Output() taskEventEmitter: EventEmitter<TaskDTO> = new EventEmitter<TaskDTO>();
  readonly loadingLabel = LOADING_LABEL

  checkFilterCompliance(task: TaskDTO): boolean {
    if (this.currentFilter === FilterEnum.ALL) return true
    else if (this.currentFilter === FilterEnum.PENDING) return task.done === false
    else if (this.currentFilter === FilterEnum.COMPLETED) return task.done === true
    return true
  }

  selectTask(task: TaskDTO) {
    this.taskEventEmitter.emit(task)
  }
}
