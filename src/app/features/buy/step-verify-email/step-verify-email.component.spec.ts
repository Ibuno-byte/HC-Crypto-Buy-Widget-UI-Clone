import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAmountInputComponent } from './step-verify-email.component';

describe('StepAmountInputComponent', () => {
  let component: StepAmountInputComponent;
  let fixture: ComponentFixture<StepAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepAmountInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
