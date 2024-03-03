import {Component, Input} from '@angular/core';
import {IQuote} from "../../model/quote";

@Component({
    selector: 'quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
    @Input('quote') quote!: IQuote;


}
