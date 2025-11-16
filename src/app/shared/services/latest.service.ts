import {Injectable} from '@angular/core';
import {faFilter, faInfo, faLocationArrow, faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {IPill} from "../model/pill";

@Injectable({
    providedIn: 'root'
})
export class LatestService {
    title: string = 'Celiapka';
    subtitle: string = 'A mobile app to discover gluten-free venues and products near you..';
    description: string = 'Celiapka is an app that allows quick and easy searching for places offering gluten-free meals and products. Thanks to integration with certified databases, you can be sure of the high quality and up-to-date information. The app offers features such as geolocation, filtering results by type of venue, opening hours, distance, and navigation to the chosen place.\n' + 'Celiapka works both online and offline, with personalization based on the user’s location. We also care about your privacy — using the app requires consent to process location data, which is used solely to improve functionality.\n' + 'Join the Celiapka community and enjoy a safe and convenient choice of gluten-free places and products every day!';
    pills: IPill[] = [
        {label: 'Search for venue', icon: faSearchLocation},
        {label: 'Filter places', icon: faFilter},
        {label: 'Check details', icon: faInfo},
        {label: 'Navigate to place', icon: faLocationArrow},
    ]

    get androidLink() {
        return 'https://play.google.com/store/apps/details?id=com.avecode.'+this.title.toLowerCase();
    }
}
