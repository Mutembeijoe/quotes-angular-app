import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from 'src/app/models/quote';
@Component({
  selector: 'app-quote-time-detail',
  templateUrl: './quote-time-detail.component.html',
  styleUrls: ['./quote-time-detail.component.css']
})
export class QuoteTimeDetailComponent implements OnInit {
  @Input()quote: Quote;
  constructor() { }
  time = interval(1000).pipe(
    map(() => this.quote.Age)
  );

  ngOnInit() {
  }

}
