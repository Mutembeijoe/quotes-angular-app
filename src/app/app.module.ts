import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { TimePipe } from './pipes/time.pipe';
import { QuoteTimeDetailComponent } from './components/quote-time-detail/quote-time-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    TimePipe,
    QuoteTimeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
