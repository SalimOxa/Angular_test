import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFundereComponent } from './edit-fundere.component';

describe('EditFundereComponent', () => {
  let component: EditFundereComponent;
  let fixture: ComponentFixture<EditFundereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFundereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFundereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
