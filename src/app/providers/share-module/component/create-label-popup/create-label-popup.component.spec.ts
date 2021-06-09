import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLabelPopupComponent } from './create-label-popup.component';

describe('CreateLabelPopupComponent', () => {
  let component: CreateLabelPopupComponent;
  let fixture: ComponentFixture<CreateLabelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLabelPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLabelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
