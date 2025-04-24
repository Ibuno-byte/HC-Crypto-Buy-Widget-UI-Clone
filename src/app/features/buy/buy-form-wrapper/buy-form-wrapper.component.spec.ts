import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFormWrapperComponent } from './buy-form-wrapper.component';

describe('BuyFormWrapperComponent', () => {
  let component: BuyFormWrapperComponent;
  let fixture: ComponentFixture<BuyFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
