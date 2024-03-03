import {Component} from '@angular/core';
import {LatestService} from 'src/app/shared/services/latest.service';

@Component({
    selector: 'mobile-apps',
    templateUrl: './mobile.apps.component.html',
    styleUrls: ['./mobile.apps.component.scss']
})
export class MobileAppsComponent {
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
}
