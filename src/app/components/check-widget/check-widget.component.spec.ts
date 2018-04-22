import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWidgetComponent } from './check-widget.component';

describe('CheckWidgetComponent', () => {
  let component: CheckWidgetComponent;
  let fixture: ComponentFixture<CheckWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
