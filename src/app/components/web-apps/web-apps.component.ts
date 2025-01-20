import {Component} from '@angular/core';
import {LatestService} from "../../shared/services/latest.service";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {contactMail} from "../../shared/constants";

@Component({
    selector: 'web-apps',
    templateUrl: './web-apps.component.html',
    styleUrl: './web-apps.component.scss'
})
export class WebAppsComponent {
    constructor(private latestService: LatestService) {
    }

    get pills() {
        return this.latestService.pills;
    }

    get androidLink() {
        return this.latestService.androidLink;
    }

    get title() {
        return this.latestService.title;
    }

    get subtitle() {
        return this.latestService.subtitle;
    }

    get description() {
        return this.latestService.description;
    }

    protected readonly faArrowRight = faArrowRight;
    protected readonly contactMail = contactMail;
}
