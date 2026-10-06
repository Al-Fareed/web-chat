import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alert } from './alert';

describe('Alert', () => {
  let component: Alert;
  let fixture: ComponentFixture<Alert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alert],
    }).compileComponents();

    fixture = TestBed.createComponent(Alert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display warning alert with red background', () => {
    component.type = 'warning';
    component.message = 'This is a warning';
    fixture.detectChanges();
    
    const alertElement = fixture.nativeElement.querySelector('.alert-warning');
    expect(alertElement).toBeTruthy();
  });

  it('should display success alert with green background', () => {
    component.type = 'success';
    component.message = 'This is a success message';
    fixture.detectChanges();
    
    const alertElement = fixture.nativeElement.querySelector('.alert-success');
    expect(alertElement).toBeTruthy();
  });

  it('should hide alert when isVisible is false', () => {
    component.isVisible = false;
    fixture.detectChanges();
    
    const alertElement = fixture.nativeElement.querySelector('.alert');
    expect(alertElement).toBeFalsy();
  });
});
