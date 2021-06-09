import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../component/login/login.component';
import { SettingComponent } from '../../component/setting/setting.component';
import { StatsComponent } from '../../component/stats/stats.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(): void {

    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'custom-dialog-container',
      data: { name: 'alo', animal: 'dog' },
      disableClose: false
    });


  }

  openSettingDialog(){
    const dialogRef = this.dialog.open(SettingComponent, {
      panelClass: 'custom-dialog-container',
      data: { name: 'alo', animal: 'dog' },
      disableClose: false
    });
  }

  openStatsDialog(){
    const dialogRef = this.dialog.open(StatsComponent, {
      panelClass: 'custom-dialog-container',
      data: { name: 'alo', animal: 'dog' },
      disableClose: false
    });
  }

}
