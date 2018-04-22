import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmInputComponent } from './utm-input.component';

describe('UtmInputComponent', () => {
  let component: UtmInputComponent;
  let fixture: ComponentFixture<UtmInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtmInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
