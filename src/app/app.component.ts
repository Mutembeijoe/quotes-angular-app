import { FormObject } from './models/form-object';
import { Component, OnInit } from '@angular/core';
import { Quote } from './models/quote';
import { FirebaseCrudService } from './services/firebase-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pattern = `[A-Za-z0-9 _.,!"'/$]*`;
  title = 'quotes';
  isHidden = true;
  $quotes;

  constructor(private db: FirebaseCrudService) {

  }

  ngOnInit() {
    this.$quotes = this.db.getQuotes().valueChanges();
  }


  submitForm(obj: FormObject) {
    const newQuote = new Quote(obj.quote, obj.author, obj.submittedBy);
    this.db.createQuote(newQuote);
    this.isHidden = true;
  }

  toggleForm() {
    this.isHidden = !this.isHidden;
  }
  onFocus(author) {
    console.log(author);
  }



}

