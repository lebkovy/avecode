import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private transparentNavbarSubject = new BehaviorSubject<boolean>(true);
  transparentNavbarAction = this.transparentNavbarSubject.asObservable();
  private currentAnchorSubject = new BehaviorSubject<string>('navbar');
  currentAnchorAction = this.currentAnchorSubject.asObservable();

  changeAnchor(anchor: string) {
    this.currentAnchorSubject.next(anchor);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: 'smooth'});
  }

  onWindowScroll() {
    let element = document.getElementById('navbar')!;
    this.transparentNavbarSubject.next(window.scrollY <= element.clientHeight);
  }
}
