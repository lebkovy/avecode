import {Component} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

interface IItem {
    label: string;
    link: string;
    anchor?: boolean;
}

interface ISection {
    label: string;
    items: IItem[];
}

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(private navigationService: NavigationService) {
        this.year = new Date().getFullYear();
    }

    year: number | undefined;
    sections: ISection[] = [
        {
            label: 'Sections', items: [
                {label: 'Offer', link: 'offer', anchor: true},
                {label: 'Mobile Apps', link: 'mobile-apps', anchor: true},
                {label: 'About Me', link: 'about', anchor: true},
            ]
        },
        {
            label: 'Resource', items: [
                {label: 'Angular', link: 'https://angular.io'},
                {label: 'Flutter', link: 'https://flutter.dev'},
                {label: 'Firebase', link: 'https://firebase.google.com'},
                {label: 'NodeJS', link: 'https://nodejs.org'}
            ]
        },
        {
            label: 'Socials', items: [
                {label: 'GitHub', link: 'https://github.com/lebkovy'},
                {label: 'LinkedIn', link: 'https://linkedin.com/in/lebkovy'},
                {label: 'Facebook', link: 'https://fb.com/graphlocks'},
                {label: 'Google Play', link: 'https://play.google.com/store/apps/developer?id=lebkovy'}
            ]
        },
        {
            label: 'Contact', items: [
                {label: 'lebiedzinski.jakub.maciej@gmail.com', link: 'mailto:lebiedzinski.jakub.maciej@gmail.com'},
                {label: 'Resume', link: 'assets/docs/resume.pdf'},
            ]
        }
    ]

    navigateTo(item: IItem) {
        if (item.anchor) this.navigationService.scrollTo(item.link);
        else window.open(item.link, '_blank');
    }
}
