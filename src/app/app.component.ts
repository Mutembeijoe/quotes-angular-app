import { FormObject } from './models/form-object';
import { Component } from '@angular/core';
import { Quote } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  isHidden = false;
  quotes: Quote[] = [
    new Quote( 'hello world', 'Mark Twain', 'Orion')
  ];

  submitForm(obj: FormObject) {
    const newQuote = new Quote(obj.quote, obj.author, obj.submittedBy);
    this.quotes.push(newQuote);
  }

  toggleForm() {
    this.isHidden = !this.isHidden;
  }



}

