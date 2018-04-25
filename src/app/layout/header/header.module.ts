import { NgModule } from "@angular/core";

import { HeaderComponent } from './header.component';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
    
})

export class HeaderModule{}