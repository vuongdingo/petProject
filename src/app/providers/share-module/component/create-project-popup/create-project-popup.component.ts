import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-project-popup',
  templateUrl: './create-project-popup.component.html',
  styleUrls: ['./create-project-popup.component.css']
})
export class CreateProjectPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateProjectPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }


  closePopup(){
    this.dialogRef.close();
  }

  onSubmit(){
    
  }

}
