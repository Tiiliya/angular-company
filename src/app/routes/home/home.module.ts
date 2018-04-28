import { NgModule } from "@angular/core";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../layout/header/header.module';
import { MenuModule } from "../../layout/menu/menu.module";
import { SidebaModule } from "../../layout/sidebar/sidebar.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { TabsModule } from "../../components/tabs/tabs.module";

@NgModule({
    imports: [
        NgZorroAntdModule,  //不确定是不是这样写
        HeaderModule,
        MenuModule,
        SidebaModule,
        MainModule,
        TabsModule,
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent
    ]
    
})

export class HomeModule{}