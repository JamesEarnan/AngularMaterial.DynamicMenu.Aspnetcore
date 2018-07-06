import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  menus: MenuModel[]; 
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:54281/api/menu')
    .subscribe(data=>{
      this.menus = data as MenuModel[];
      console.log(JSON.parse(JSON.stringify(data)));
    });
  }

}
