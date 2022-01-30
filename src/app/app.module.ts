import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'skills', component: SkillsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
