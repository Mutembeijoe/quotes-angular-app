import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTimeDetailComponent } from './quote-time-detail.component';

describe('QuoteTimeDetailComponent', () => {
  let component: QuoteTimeDetailComponent;
  let fixture: ComponentFixture<QuoteTimeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteTimeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTimeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
