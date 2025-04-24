import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCryptoSelectorComponent } from './step-crypto-selector.component';

describe('StepCryptoSelectorComponent', () => {
  let component: StepCryptoSelectorComponent;
  let fixture: ComponentFixture<StepCryptoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCryptoSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCryptoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
