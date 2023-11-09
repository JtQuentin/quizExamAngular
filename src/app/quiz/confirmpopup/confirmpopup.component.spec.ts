import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmpopupComponent } from './confirmpopup.component';

describe('ConfirmpopupComponent', () => {
  let component: ConfirmpopupComponent;
  let fixture: ComponentFixture<ConfirmpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmpopupComponent]
    });
    fixture = TestBed.createComponent(ConfirmpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
