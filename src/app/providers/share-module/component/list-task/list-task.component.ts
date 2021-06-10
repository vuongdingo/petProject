import { Component, OnInit } from '@angular/core';
import { TaskDetailSideNaveServiceService } from 'src/app/providers/services/task-details-side-nave-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  constructor(private taskDetail: TaskDetailSideNaveServiceService) { }

  ngOnInit(): void {
  }

  activeTaskDetails(){
    this.taskDetail.toggle();
  }

}
