import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent implements OnInit {

  @ViewChild('picker') datePicker: MatDatepicker<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

  activePicker(){
    this.datePicker.open();
  }

}
