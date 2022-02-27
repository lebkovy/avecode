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
            name: 'Agnieszka',
            position: 'Product Designer',
            text: 'I had the opportunity to collaborate with Kuba on the Android and iOS app. Kuba is hardworking,\n' +
                '        engaged in creating the best solutions, he pays great attention to human center design. Working with\n' +
                '        him was a true pleasure!'
        },
    ]
    goals: string[] = [
        'clean design', 'optimized code', 'sustainability', 'functionality', 'useful', 'transparency', 'reliability'
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

}
