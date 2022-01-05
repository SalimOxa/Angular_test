import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutJobeComponent } from './ajout-jobe.component';

describe('AjoutJobeComponent', () => {
  let component: AjoutJobeComponent;
  let fixture: ComponentFixture<AjoutJobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutJobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutJobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
