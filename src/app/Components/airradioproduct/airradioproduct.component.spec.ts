import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirradioproductComponent } from './airradioproduct.component';

describe('AirradioproductComponent', () => {
  let component: AirradioproductComponent;
  let fixture: ComponentFixture<AirradioproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirradioproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirradioproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
