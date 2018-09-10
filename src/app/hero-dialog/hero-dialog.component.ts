import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-hero-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.css']
})
export class HeroDialogComponent implements OnInit {
  objectKeys = Object.keys;
  item: any;

  constructor(public dialogRef: MatDialogRef<HeroDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.item = this.data;
  }

  close() {
    this.dialogRef.close();
  }

}
