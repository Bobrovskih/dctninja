import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocHowItWorksComponent } from './doc-how-it-works.component';

describe('DocHowItWorksComponent', () => {
  let component: DocHowItWorksComponent;
  let fixture: ComponentFixture<DocHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocHowItWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
