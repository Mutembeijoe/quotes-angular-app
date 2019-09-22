import { Quote } from 'src/app/models/quote';
import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { all } from 'q';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective implements OnInit {
  @Input('appHighlightQuote') quotes; // array with all quotes and current quote
  constructor(private el: ElementRef) {
   }
   ngOnInit() {
    let highestId;
    let votes = 0;
    const allQuotes = this.quotes[0];
    const currentQuote = this.quotes[1];
    allQuotes.forEach(quote => {
      if (quote.upvotes > votes) {
        votes = quote.upvotes;
        highestId = quote.key;
      }
    });

    if (currentQuote.key === highestId) {
      this.el.nativeElement.style.backgroundColor = 'purple';
      this.el.nativeElement.style.color = 'white';
     }

   }
}
