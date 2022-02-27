import { Component, Input } from '@angular/core';
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons/faQuoteRight";
import {IQuote} from "../../../shared/model/quote";

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  faQuoteRight = faQuoteRight;
  @Input('quote') quote!: IQuote;


}
