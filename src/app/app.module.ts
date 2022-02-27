import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { OfferComponent } from './components/offer/offer.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MobileAppsComponent } from './components/mobile-apps/mobile.apps.component';
import { LandingComponent } from './components/landing/landing.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { QuoteComponent } from './components/about/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OfferComponent,
    OfferComponent,
    MobileAppsComponent,
    LandingComponent,
    FooterComponent,
    AboutComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
