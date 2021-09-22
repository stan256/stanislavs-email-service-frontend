import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EmailConstructorComponent} from './email-constructor.component';

describe('EmailConstructorComponent', () => {
  let component: EmailConstructorComponent;
  let fixture: ComponentFixture<EmailConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailConstructorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
