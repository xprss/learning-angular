import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterEnum } from '../../dto/FilterEnum';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() currentFilter: FilterEnum = FilterEnum.ALL
  @Output() homeEventEmitter: EventEmitter<void> = new EventEmitter<void>()
  @Output() currentFilterEmitter: EventEmitter<FilterEnum> = new EventEmitter<FilterEnum>()

  setFilter(_filter: number): void {
    switch (_filter) {
      case 0:
        this.currentFilterEmitter.emit(FilterEnum.ALL);
        break;
      case 1:
        this.currentFilterEmitter.emit(FilterEnum.PENDING);
        break;
      case 2:
        this.currentFilterEmitter.emit(FilterEnum.COMPLETED);
        break;
      default: break;
    }
  }

  home(): void {
    this.homeEventEmitter.emit()
  }
}
