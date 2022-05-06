import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcaresectorComponent } from './healthcaresector.component';

describe('HealthcaresectorComponent', () => {
  let component: HealthcaresectorComponent;
  let fixture: ComponentFixture<HealthcaresectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcaresectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcaresectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
