import { Component, Input, OnInit } from '@angular/core';
import { TaskDTO } from '../../dto/TaskDTO';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../dto/FilterEnum';

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

  checkFilterCompliance(task: TaskDTO): boolean {
    if (this.currentFilter === FilterEnum.ALL) return true
    else if (this.currentFilter === FilterEnum.PENDING) return task.done === false
    else if (this.currentFilter === FilterEnum.COMPLETED) return task.done === true
    return true
  }
}
