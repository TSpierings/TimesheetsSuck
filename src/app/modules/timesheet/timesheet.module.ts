import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimesheetComponent } from './timesheet/timesheet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DatePipe
  ],
  declarations: [TimesheetComponent]
})
export class TimesheetModule { }
