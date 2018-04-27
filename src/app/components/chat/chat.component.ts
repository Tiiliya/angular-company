import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit{
  
  message:string = '';
  warn: boolean = false;
  chatList: Array<any> = [
    { 
      direction:'',
      name:'Alexander Pierce', 
      date:'23 Jan 2:00 pm',
      img:'../../../assets/img/user1-128x128.jpg',
      message:"Is this template really for free? That's unbelievable!"
    },{ 
      direction:'right',
      name:'Alexander Pierce', 
      date:'23 Jan 2:00 pm',
      img:'../../../assets/img/user3-128x128.jpg',
      message:"Is this template really for free? That's unbelievable!"
    },{ 
      direction:'',
      name:'Alexander Pierce', 
      date:'23 Jan 2:00 pm',
      img:'../../../assets/img/user1-128x128.jpg',
      message:"Is this template really for free? That's unbelievable!"
    },{ 
      direction:'right',
      name:'Alexander Pierce', 
      date:'23 Jan 2:00 pm',
      img:'../../../assets/img/user3-128x128.jpg',
      message:"Is this template really for free? That's unbelievable!"
    },
  ]
  
  constructor(
    private _message: NzMessageService
  ) { }

  ngOnInit() {
  }

  sendMess($e){
    console.log($e.clientHeight)
    console.log($e.scrollHeight)
    let self = this;

    if(this.message === ''){
      this.warn = true;
    } else {
      this.chatList.push({
        direction:'',
        name:'Alexander Pierce', 
        date:'23 Jan 2:00 pm',
        img:'../../../assets/img/user1-128x128.jpg',
        message:this.message
      })
      this.message = ''
    }
    setTimeout(() => {
      self.warn = false;
    },2000)
     
    setTimeout(() => {
      $e.scrollTop = $e.scrollHeight - $e.clientHeight;
    },0)
  }
}
