import {Component} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {contactMail} from "../../constants";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

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
    contactMail = contactMail;
    sections: ISection[] = [
        {
            label: 'Sections', items: [
                {label: 'Offer', link: 'offer', anchor: true},
                {label: 'Mobile Apps', link: 'mobile-apps', anchor: true},
                {label: 'Websites', link: 'web-apps', anchor: true},
                {label: 'About Me', link: 'about', anchor: true},
            ]
        },
        {
            label: 'Resources', items: [
                {label: 'Flutter', link: 'https://flutter.dev'},
                {label: 'Angular', link: 'https://angular.io'},
                {label: 'Firebase', link: 'https://firebase.google.com'},
                {label: 'NodeJS', link: 'https://nodejs.org'}
            ]
        },
        {
            label: 'Socials', items: [
                {label: 'GitHub', link: 'https://github.com/lebkovy'},
                {label: 'LinkedIn', link: 'https://linkedin.com/in/lebkovy'},
                {label: 'Facebook', link: 'https://fb.com/graphlocks'},
                {label: 'Google Play', link: 'https://play.google.com/store/apps/dev?id=5506221675350182536'}
            ]
        },
        {
            label: '', items: [
                {label: 'CliftonStrengths 34 Report', link: 'assets/docs/CliftonStrengths.pdf'},
                {label: 'Resume', link: 'assets/docs/resume.pdf'},
            ]
        }
    ]

    navigateTo(item: IItem) {
        if (item.anchor) this.navigationService.scrollTo(item.link);
        else window.open(item.link, '_blank');
    }

    protected readonly faArrowRight = faArrowRight;
}
