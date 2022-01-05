import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPanierComponent } from './ajout-panier.component';

describe('AjoutPanierComponent', () => {
  let component: AjoutPanierComponent;
  let fixture: ComponentFixture<AjoutPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
