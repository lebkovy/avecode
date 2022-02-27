import {Component, HostListener} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Observable} from "rxjs";

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
    { label: 'Home Page', anchor: 'landing' },
    { label: 'My Offer', anchor: 'offer' },
    { label: 'Mobile Apps', anchor: 'mobile-apps' },
    { label: 'About Me', anchor: 'about' },
  ];
  currentAnchor$: Observable<string> | undefined;
  transparentNavbar$: Observable<boolean> | undefined;

  constructor(private navigationService: NavigationService) {
    this.currentAnchor$ = navigationService.currentAnchorAction;
    this.transparentNavbar$ = navigationService.transparentNavbarAction;
  }

  isInViewport(element: HTMLElement): boolean {
    if (element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    } else {
      return false;
    }
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.navigationService.onWindowScroll();
  }

  scrollTo(id: string) {
    this.navigationService.scrollTo(id);
  }

}
