import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface Day {
  day: Date;
}

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  days = new Array(42);

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.fillCalendar();
  }

  private fillCalendar() {
    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth();
    const firstDay = new Date(thisYear, thisMonth);

    console.log(firstDay.getDay());

    // Edge case: show week before if month starts on monday
    let startDayOfWeek = firstDay.getDay();
    startDayOfWeek = startDayOfWeek <= 1 ? startDayOfWeek + 7 : startDayOfWeek;

    let dayCursor = new Date(thisYear, thisMonth, 1);
    for (let i = 0; dayCursor.getMonth() === thisMonth; i++) {
      this.days[startDayOfWeek + i - 1] = {
        day: dayCursor
       };

      dayCursor = new Date(thisYear, thisMonth, i + 2);
    }
  }

}
