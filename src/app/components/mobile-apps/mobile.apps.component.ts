import {Component} from '@angular/core';
import {faSearchDollar, faHandHoldingUsd, faLandmark, faPiggyBank} from '@fortawesome/free-solid-svg-icons';
import {IPill} from "../../shared/model/pill";

@Component({
    selector: 'mobile-apps',
    templateUrl: './mobile.apps.component.html',
    styleUrls: ['./mobile.apps.component.scss']
})
export class MobileAppsComponent {
    pills: IPill[] = [
        {label: 'Choose Currency', icon: faSearchDollar},
        {label: 'Provide Operations', icon: faHandHoldingUsd},
        {label: 'Store History', icon: faLandmark},
        {label: 'Monitor Savings', icon: faPiggyBank},
    ];
    link = 'https://play.google.com/store/apps/details?id=com.lebkovy.ivault';
}
