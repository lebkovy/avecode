import { Component } from '@angular/core';
import {faArrowRight,faDesktop, faMobileAlt, faPaintBrush, faWrench} from "@fortawesome/free-solid-svg-icons";
import {IPill} from "../../shared/model/pill";
import { contactMail } from "../../shared/constants";

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
  faArrowRight = faArrowRight;
  contactMail = contactMail;
  pills: IPill[] = [
    { label: 'Web Development', icon: faDesktop },
    { label: 'Mobile Applications', icon: faMobileAlt },
    { label: 'Design & Prototyping', icon: faPaintBrush },
    { label: 'Administration', icon: faWrench },
  ];
}
