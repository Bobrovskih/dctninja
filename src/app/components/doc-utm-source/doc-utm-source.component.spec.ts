import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUtmSourceComponent } from './doc-utm-source.component';

describe('DocUtmSourceComponent', () => {
  let component: DocUtmSourceComponent;
  let fixture: ComponentFixture<DocUtmSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocUtmSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocUtmSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
