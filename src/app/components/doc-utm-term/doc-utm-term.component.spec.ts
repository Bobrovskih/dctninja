import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUtmTermComponent } from './doc-utm-term.component';

describe('DocUtmTermComponent', () => {
  let component: DocUtmTermComponent;
  let fixture: ComponentFixture<DocUtmTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocUtmTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocUtmTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
