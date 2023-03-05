import {Component, OnInit} from '@angular/core';
import {IQuote} from "../../shared/model/quote";

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    quotes: IQuote[] = [
        {
            name: 'Agnes',
            position: 'Product Designer',
            text: 'I had the opportunity to collaborate with Kuba on the Android and iOS app. Kuba is hardworking,\n' +
                '        engaged in creating the best solutions, he pays great attention to human center design. Working with\n' +
                '        him was a true pleasure!'
        },
        {
            name: 'Margaret',
            position: 'Founder',
            text: 'Kuba is a true master of mobile development.\n' +
                'His talent for creating intuitive and user-friendly apps is second to none,\n' +
                'and his dedication to his craft is truly inspiring.'
        }
    ]
    goals: string[] = [
        'clean design', 'optimized code', 'sustainability', 'functionality', 'useful', 'transparency', 'reliability'
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

}
