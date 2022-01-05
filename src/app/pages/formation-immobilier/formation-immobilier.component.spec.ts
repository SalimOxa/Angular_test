import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationImmobilierComponent } from './formation-immobilier.component';

describe('FormationImmobilierComponent', () => {
  let component: FormationImmobilierComponent;
  let fixture: ComponentFixture<FormationImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationImmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
