import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunningConditionComponent } from './running-condition/running-condition.component';
import { MachineSelectionsComponent } from './machine-selections/machine-selections.component';
import { HomePageComponent } from './home-page/home-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RunningConditionComponent,
    MachineSelectionsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
