import { Component, Input } from '@angular/core';
import { TaskDTO } from '../../dto/TaskDTO';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() currentTask: TaskDTO | undefined = undefined

  
}
