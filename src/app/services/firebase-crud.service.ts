import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {

  quotes: AngularFireList<Quote> = null;
  private baseUrl = '/quotes';

  constructor(private db: AngularFireDatabase) {
    this.quotes = db.list(this.baseUrl);
  }

  createQuote(quote: Quote ) {
    return this.quotes.push(quote);
  }

  getQuotes() {
     return this.quotes;
  }
}
