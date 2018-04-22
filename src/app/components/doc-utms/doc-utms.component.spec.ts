import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUtmsComponent } from './doc-utms.component';

describe('DocUtmsComponent', () => {
  let component: DocUtmsComponent;
  let fixture: ComponentFixture<DocUtmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocUtmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocUtmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
