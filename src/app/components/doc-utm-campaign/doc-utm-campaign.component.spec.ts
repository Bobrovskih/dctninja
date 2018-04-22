import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUtmCampaignComponent } from './doc-utm-campaign.component';

describe('DocUtmCampaignComponent', () => {
  let component: DocUtmCampaignComponent;
  let fixture: ComponentFixture<DocUtmCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocUtmCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocUtmCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
