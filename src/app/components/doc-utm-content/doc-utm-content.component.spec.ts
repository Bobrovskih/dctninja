import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUtmContentComponent } from './doc-utm-content.component';

describe('DocUtmContentComponent', () => {
  let component: DocUtmContentComponent;
  let fixture: ComponentFixture<DocUtmContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocUtmContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocUtmContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
