import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSheetsComponent } from './get-sheets.component';

describe('GetSheetsComponent', () => {
  let component: GetSheetsComponent;
  let fixture: ComponentFixture<GetSheetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSheetsComponent]
    });
    fixture = TestBed.createComponent(GetSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
