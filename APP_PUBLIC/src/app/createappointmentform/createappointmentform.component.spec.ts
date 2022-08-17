import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateappointmentformComponent } from './createappointmentform.component';

describe('CreateappointmentformComponent', () => {
  let component: CreateappointmentformComponent;
  let fixture: ComponentFixture<CreateappointmentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateappointmentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateappointmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
