import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public isClosed = false;

  ngOnInit(): void {
    console.log(this.dialogRef.id, 'dialog in login');
  }

  closeAll() {
    console.log('closed click');
  }

  onNoClick(): void {
    this.isClosed = true;
    this.dialogRef.close();
  }

  removeElementsByClass(className: any) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      if (elements && elements.length > 0) {
        //elements[0].parentNode.removeChild(elements[0]);
        console.log(1);
      }
    }
  }
}
