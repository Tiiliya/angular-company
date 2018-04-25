import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styles : [`
      :host ::ng-deep .ant-layout-header{
        height: 50px;
        line-height: 50px;
        background:#3c8dbc !important;
      }
  `]
})
export class HomeComponent {
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  slide(){
    this.isCollapsed = !this.isCollapsed
  }
}
