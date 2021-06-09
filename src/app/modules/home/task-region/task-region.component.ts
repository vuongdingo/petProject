import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { TaskDetailSideNaveServiceService } from 'src/app/providers/services/task-details-side-nave-service.service';

@Component({
  selector: 'app-task-region',
  templateUrl: './task-region.component.html',
  styleUrls: ['./task-region.component.sass']
})
export class TaskRegionComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(private taskDetail: TaskDetailSideNaveServiceService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.taskDetail.setDrawer(this.drawer);
  }

}
