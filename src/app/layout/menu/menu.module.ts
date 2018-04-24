import { NgModule } from "@angular/core";

import { MenuComponent } from './menu.component';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule
    ],
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ]
    
})

export class MenuModule{}