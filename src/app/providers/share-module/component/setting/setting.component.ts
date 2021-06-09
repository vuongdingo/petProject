import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  toogleLogin(): void {

    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'custom-dialog-container',
      data: { name: 'alo', animal: 'dog' },
      disableClose: false
    });
  }


}
