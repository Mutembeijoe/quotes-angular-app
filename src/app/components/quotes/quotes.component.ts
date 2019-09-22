import { FirebaseCrudService } from './../../services/firebase-crud.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { Observable, from } from 'rxjs';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input()$quotes: Observable<Quote[]>;
  constructor(private db: FirebaseCrudService) { }
  ngOnInit() {
  }

  upVote(quote: Quote) {
    const value = quote.upvotes;
    this.db.changeVote(quote.key, { upvotes: value + 1 });

  }
  downVote(quote: Quote) {
    const value = quote.downvotes;
    this.db.changeVote(quote.key, {downvotes: value + 1 });
  }

  deleteQuote(quote: Quote) {
    this.db.deleteQuote(quote.key);
  }

}
