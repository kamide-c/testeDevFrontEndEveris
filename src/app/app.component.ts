import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";

import { HeroModel } from "./hero.model";
import { HeroService } from "./hero.service";

import { HeroDialogComponent } from './hero-dialog/hero-dialog.component';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  hero: HeroModel[];

  constructor(private heroService: HeroService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.heroService.list()
      .then((hero) => {
        this.hero = hero;
      });
  }

  openDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    let dialogRef = this.dialog.open(HeroDialogComponent, dialogConfig);
  }
}
