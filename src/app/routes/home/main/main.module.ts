import { ChatModule } from './../../../components/chat/chat.module';
import { NgModule } from "@angular/core";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { MainComponent } from './main.component';
import { NgxEchartsModule } from "ngx-echarts";
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,  //不确定是不是这样写
        NgxEchartsModule,
        ChatModule
    ],
    declarations: [
        MainComponent
    ],
    exports:[MainComponent]    
})

export class MainModule{}