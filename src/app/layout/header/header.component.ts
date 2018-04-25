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

  messages: Array<string> = ['5 mins','2 hours','Today','Yesterdy']
  notice: Array<any> = [
    { color: '#00c0ef',icon:'anticon anticon-check-circle'},
    { color: '#f39c12',icon:'anticon anticon-area-chart'},
    { color: '#dd4b39',icon:'anticon anticon-cloud'},
    { color: '#00a65a',icon:'anticon anticon-shopping-cart'},
  ]
  tasks: Array<any> = [
    { color: '#00c0ef',width:'20%'},
    { color: '#f39c12',width:'40%'},
    { color: '#dd4b39',width:'60%'},
    { color: '#00a65a',width:'80%'}
  ]
  constructor() { }

  ngOnInit() {
  }

  slide(){
    this.triggerSlide.emit()
  }
}
