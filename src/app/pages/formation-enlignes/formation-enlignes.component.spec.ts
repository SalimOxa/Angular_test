import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationEnlignesComponent } from './formation-enlignes.component';

describe('FormationEnlignesComponent', () => {
  let component: FormationEnlignesComponent;
  let fixture: ComponentFixture<FormationEnlignesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationEnlignesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationEnlignesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
