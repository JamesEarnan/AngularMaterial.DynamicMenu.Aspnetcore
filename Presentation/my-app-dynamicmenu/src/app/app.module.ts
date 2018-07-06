import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavmenuitemComponent } from './navmenu/navmenuitem.component';
import { ForthContentComponent } from './forth-content/forth-content.component';
import { FirstContentComponent } from './first-content/first-content.component';
import { ThirdContentComponent } from './third-content/third-content.component';
import { SecondContentComponent } from './second-content/second-content.component';
import { FifthContentComponent } from './fifth-content/fifth-content.component';
import { SixthContentComponent } from './sixth-content/sixth-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    NavmenuitemComponent,
    ForthContentComponent,
    FirstContentComponent,
    ThirdContentComponent,
    SecondContentComponent,
    FifthContentComponent,
    SixthContentComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
