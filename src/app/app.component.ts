import { FormObject } from './models/form-object';
import { Component } from '@angular/core';
import { Quote } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pattern = `[A-Za-z0-9 _.,!"'/$]*`;
  title = 'quotes';
  isHidden = true;
  quotes: Quote[] = [
    // tslint:disable-next-line: max-line-length
    new Quote( 'Lorem ipsuni distinctio tempora asperiores possimus beatae, libero architecto eos adipisci, iure dolorem fugiat consectetur at obcaecati eum illum eligendi commodi. Ne?', 'Mark Twain', 'Orion'),
    // tslint:disable-next-line: max-line-length
    new Quote( 'Lorem ipsuni distinctio tempora asperiores possimus beatae, libero architecto eos adipisci, iure dolorem fugiat consectetur at obcaecati eum illum eligendi commodi. Ne?', 'Abraham Lincoln', 'Joe'),
    // tslint:disable-next-line: max-line-length
    new Quote( 'Lorem ipsuni distinctio tempora asperiores possimus beatae, libero architecto eos adipisci, iure dolorem fugiat consectetur at obcaecati eum illum eligendi commodi. Ne?', 'Mwai Kibaki', 'Dan')
  ];

  submitForm(obj: FormObject) {
    const newQuote = new Quote(obj.quote, obj.author, obj.submittedBy);
    this.quotes.push(newQuote);
  }

  toggleForm() {
    this.isHidden = !this.isHidden;
  }
  onFocus(author) {
    console.log(author);
  }



}

