import { Component, Input } from "@angular/core";

@Component({
    selector: 'navmenuitem',
    templateUrl: './navmenuitem.component.html',
  })
  export class NavmenuitemComponent {
    @Input() menus;
    @Input() IsBased;
  }