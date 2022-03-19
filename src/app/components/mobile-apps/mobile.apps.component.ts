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

    get link() {
        return this.latestService.androidLink;
    }
}
