import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker-popup',
  templateUrl: './date-picker-popup.component.html',
  styleUrls: ['./date-picker-popup.component.css']
})
export class DatePickerPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

}
