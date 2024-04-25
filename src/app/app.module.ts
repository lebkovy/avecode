import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {OfferComponent} from './components/offer/offer.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MobileAppsComponent} from './components/mobile-apps/mobile.apps.component';
import {LandingComponent} from './components/landing/landing.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {AboutComponent} from './components/about/about.component';
import {QuoteComponent} from './shared/components/quote/quote.component';
import {HomeComponent} from './components/home/home.component';
import {Route, RouterModule} from "@angular/router";
import {WebAppsComponent} from './components/web-apps/web-apps.component';

const routes: Route[] = [
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: ''}
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        OfferComponent,
        MobileAppsComponent,
        LandingComponent,
        FooterComponent,
        AboutComponent,
        QuoteComponent,
        HomeComponent,
        WebAppsComponent,
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        RouterModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
