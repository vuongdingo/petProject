import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-label-popup',
  templateUrl: './create-label-popup.component.html',
  styleUrls: ['./create-label-popup.component.css']
})
export class CreateLabelPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateLabelPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  closePopup(){
    this.dialogRef.close();
  }
}
