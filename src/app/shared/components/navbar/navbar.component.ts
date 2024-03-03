import {Component, HostListener} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Observable} from "rxjs";
import {LatestService} from "../../services/latest.service";

interface INavItem {
    label: string;
    anchor: string;
}

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    navItems: INavItem[] = [
        {label: 'Home Page', anchor: 'landing'},
        {label: 'My Offer', anchor: 'offer'},
        {label: 'Mobile Apps', anchor: 'mobile-apps'},
        {label: 'About Me', anchor: 'about'},
    ];
    currentAnchor$: Observable<string> | undefined;
    transparentNavbar$: Observable<boolean> | undefined;

    constructor(private navigationService: NavigationService, private latestService: LatestService) {
        this.currentAnchor$ = navigationService.currentAnchorAction;
        this.transparentNavbar$ = navigationService.transparentNavbarAction;
    }

    get latestAppLink() {
        return this.latestService.androidLink;
    }


    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        this.navigationService.onWindowScroll();
    }

    scrollTo(id: string) {
        this.navigationService.scrollTo(id);
    }

}
