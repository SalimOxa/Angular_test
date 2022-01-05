import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModalityComponent } from './ajout-modality.component';

describe('AjoutModalityComponent', () => {
  let component: AjoutModalityComponent;
  let fixture: ComponentFixture<AjoutModalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutModalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
