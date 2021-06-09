import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRegionComponent } from './task-region.component';

describe('TaskRegionComponent', () => {
  let component: TaskRegionComponent;
  let fixture: ComponentFixture<TaskRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
