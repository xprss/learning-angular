import { Component, Input, Output } from '@angular/core';
import { FilterEnum } from '../../dto/FilterEnum';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() @Output() currentFilter: FilterEnum = FilterEnum.ALL

  setFilter(_filter: number): void {
    switch (_filter) {
      case 0: this.currentFilter = FilterEnum.ALL; console.log("0");
       break;
      case 1: this.currentFilter = FilterEnum.PENDING; console.log("1");
       break;
      case 2: this.currentFilter = FilterEnum.COMPLETED; console.log("2");
       break;
      default: break;
    }
  }

  home() {
    
  }
}
