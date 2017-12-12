import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './modules/routing/routing-module'
import { HeaderModule } from './modules/header/header.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimesheetModule } from 'app/modules/timesheet/timesheet.module';
import { HeaderComponent } from 'app/modules/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    TimesheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
