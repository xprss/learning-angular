import { Component, Input, inject, OnInit } from '@angular/core';
import { TitleComponent } from '../../../components/title/title/title.component';
import { ParagraphComponent } from '../../../components/paragraph/paragraph.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [TitleComponent, ParagraphComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {
  @Input() data: any;
  mainTitle: string | undefined;
  subTitle: string | undefined;
  miniTitle: string | undefined;
  paragraph: string | undefined;
  
  ngOnInit(): void {
    this.mainTitle = this.data.mainTitle;
    this.subTitle = this.data.subTitle;
    this.miniTitle = this.data.miniTitle;
    this.paragraph = this.data.paragraph;
  }
}
