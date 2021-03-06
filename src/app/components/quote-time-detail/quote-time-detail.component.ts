import { Component, OnInit, Input } from '@angular/core';
import { interval, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from 'src/app/models/quote';
@Component({
  selector: 'app-quote-time-detail',
  templateUrl: './quote-time-detail.component.html',
  styleUrls: ['./quote-time-detail.component.css']
})
export class QuoteTimeDetailComponent implements OnInit {
  @Input()quote: Quote;
  age;
  constructor() { }
  time = timer(1000, 60000).pipe(
    map(() => this.getAge())
  );

  ngOnInit() {
    this.getAge();

  }

  getAge() {
    const now = Date.now();
    const age = this.quote.addedAt;
    const milliseconds =  now - age;
    return milliseconds;
}

}
