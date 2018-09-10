import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { HeroService } from "./hero.service"


import { AppComponent } from './app.component';
import { HeroDialogComponent } from './hero-dialog/hero-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [HeroDialogComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
