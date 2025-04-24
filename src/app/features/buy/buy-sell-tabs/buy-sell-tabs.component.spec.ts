import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellTabsComponent } from './buy-sell-tabs.component';

describe('BuySellTabsComponent', () => {
  let component: BuySellTabsComponent;
  let fixture: ComponentFixture<BuySellTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuySellTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuySellTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
