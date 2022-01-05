import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobeComponent } from './jobe.component';

describe('JobeComponent', () => {
  let component: JobeComponent;
  let fixture: ComponentFixture<JobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
