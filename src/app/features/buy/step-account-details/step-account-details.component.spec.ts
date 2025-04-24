import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepWalletInputComponent } from './step-account-details.component';

describe('StepWalletInputComponent', () => {
  let component: StepWalletInputComponent;
  let fixture: ComponentFixture<StepWalletInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepWalletInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepWalletInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
