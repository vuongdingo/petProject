import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateLabelPopupComponent } from 'src/app/providers/share-module/component/create-label-popup/create-label-popup.component';
import { CreateProjectPopupComponent } from 'src/app/providers/share-module/component/create-project-popup/create-project-popup.component';

@Component({
  selector: 'app-project-region',
  templateUrl: './project-region.component.html',
  styleUrls: ['./project-region.component.sass']
})
export class ProjectRegionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddProjectDialog(): void {

    const dialogRef = this.dialog.open(CreateProjectPopupComponent, {
      panelClass: 'custom-dialog-container',
      data: { name: 'alo', animal: 'dog' },
      disableClose: false
    });

  }

  openAddLabelDialog(): void {
    const dialogRef = this.dialog.open(CreateLabelPopupComponent, {
      panelClass: 'custom-dialog-container',
      data: { name: 'alo', animal: 'dog' },
      disableClose: false
    });
  }

  

}
