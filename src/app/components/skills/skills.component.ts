import { Component } from '@angular/core';
import { faDesktop, faMobileAlt, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import {Pill} from "../../shared/components/grid-section/grid-section.component";

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  pills: Pill[] = [
    { label: 'Web Development', icon: faDesktop },
    { label: 'Mobile Applications', icon: faMobileAlt },
    { label: 'Designing and Prototyping', icon: faPaintBrush },
  ];
}
