import { NgModule } from "@angular/core";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { MainComponent } from './main.component';

@NgModule({
    imports: [
        NgZorroAntdModule,  //不确定是不是这样写
    ],
    declarations: [
        MainComponent
    ],
    exports:[MainComponent]    
})

export class MainModule{}