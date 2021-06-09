import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRegionComponent } from './project-region.component';

describe('ProjectRegionComponent', () => {
  let component: ProjectRegionComponent;
  let fixture: ComponentFixture<ProjectRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
