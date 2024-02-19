import { Component, OnInit } from '@angular/core';
import { TaskDTO } from '../../dto/TaskDTO';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { DetailsComponent } from '../../components/details/details.component';
import { FilterEnum } from '../../dto/FilterEnum';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-agenda-mainpage',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, DetailsComponent],
  providers: [TaskService],
  templateUrl: './agenda-mainpage.component.html',
  styleUrl: './agenda-mainpage.component.css'
})
export class AgendaMainpageComponent implements OnInit {
  currentTask: TaskDTO | undefined = undefined;
  currentFilter: FilterEnum = FilterEnum.ALL
  tasks: TaskDTO[] = []
  loading: boolean = true;

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().then(tasks => {this.tasks = tasks; this.loading = false})
  }

}
