import {Injectable} from '@angular/core';
import {faHandHoldingUsd, faLandmark, faPiggyBank, faSearchDollar} from "@fortawesome/free-solid-svg-icons";
import {IPill} from "../model/pill";

@Injectable({
    providedIn: 'root'
})
export class LatestService {
    title: string = 'iVault';
    subtitle: string = 'A mobile app to manage and organize your currency operations.';
    description: string = 'iValut is an application that allows you to calculate your gains or losses on currency operations. An\n' +
        '            algorithm compares the current exchange rate of a given currency and calculates the difference of your\n' +
        '            balance. If the balance is positive, you have gained the calculated amount - if not, you have lost the\n' +
        '            indicated amount.';
    pills: IPill[] = [
        {label: 'Choose Currency', icon: faSearchDollar},
        {label: 'Provide Operations', icon: faHandHoldingUsd},
        {label: 'Store History', icon: faLandmark},
        {label: 'Monitor Savings', icon: faPiggyBank},
    ]

    get androidLink() {
        return 'https://play.google.com/store/apps/details?id=com.lebkovy.'+this.title.toLowerCase();
    }
}
