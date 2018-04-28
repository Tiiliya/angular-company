import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports:[
        CommonModule,
        NgZorroAntdModule,
    ],
    declarations:[
        TabsComponent
    ],
    exports:[
        TabsComponent
    ]
})

export class TabsModule{}