import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocGuideComponent } from './doc-guide.component';

describe('DocGuideComponent', () => {
  let component: DocGuideComponent;
  let fixture: ComponentFixture<DocGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
