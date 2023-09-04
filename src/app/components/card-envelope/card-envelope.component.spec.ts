import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEnvelopeComponent } from './card-envelope.component';

describe('CardEnvelopeComponent', () => {
  let component: CardEnvelopeComponent;
  let fixture: ComponentFixture<CardEnvelopeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEnvelopeComponent]
    });
    fixture = TestBed.createComponent(CardEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
