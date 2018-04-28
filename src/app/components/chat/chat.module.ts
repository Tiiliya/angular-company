import { NgModule } from "@angular/core";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from '@angular/common';
import { ChatComponent } from "./chat.component";
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,  //不确定是不是这样写
    ],
    declarations: [
        ChatComponent
    ],
    exports:[ChatComponent]    
})

export class ChatModule{}