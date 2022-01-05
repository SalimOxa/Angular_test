import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobeComponent } from './edit-jobe.component';

describe('EditJobeComponent', () => {
  let component: EditJobeComponent;
  let fixture: ComponentFixture<EditJobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
