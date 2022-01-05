import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationAssuranceComponent } from './formation-assurance.component';

describe('FormationAssuranceComponent', () => {
  let component: FormationAssuranceComponent;
  let fixture: ComponentFixture<FormationAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationAssuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
