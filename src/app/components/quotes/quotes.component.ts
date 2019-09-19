import { Component, OnInit, Input, Output } from '@angular/core';
import { Quote } from 'src/app/models/quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input()quotes;
  constructor() { }
  ngOnInit() {
  }
  upVote(quote: Quote) {
    quote.upvotes++;
  }
  downVote(quote: Quote) {
    quote.downvotes++;
  }

}
