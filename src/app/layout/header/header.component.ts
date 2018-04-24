import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() flag:boolean;
  @Output() triggerSlide: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  slide(){
    this.triggerSlide.emit()
  }
}
