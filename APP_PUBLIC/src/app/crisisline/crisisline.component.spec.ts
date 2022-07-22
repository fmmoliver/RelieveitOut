import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisislineComponent } from './crisisline.component';

describe('CrisislineComponent', () => {
  let component: CrisislineComponent;
  let fixture: ComponentFixture<CrisislineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisislineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisislineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
