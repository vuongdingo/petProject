import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskDetailSideNaveServiceService } from 'src/app/providers/services/task-details-side-nave-service.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.sass']
})
export class TaskDetailsComponent implements OnInit {

  constructor(
    private detailService: TaskDetailSideNaveServiceService
    ) { }

  events: string[] = [];
  opened: boolean = false;
  
  ngOnInit(): void {
  }

  close(){
    console.log('toggle');
    this.detailService.toggle();
  }

}
