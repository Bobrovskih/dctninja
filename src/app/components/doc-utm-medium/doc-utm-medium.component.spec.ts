import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUtmMediumComponent } from './doc-utm-medium.component';

describe('DocUtmMediumComponent', () => {
  let component: DocUtmMediumComponent;
  let fixture: ComponentFixture<DocUtmMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocUtmMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocUtmMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
