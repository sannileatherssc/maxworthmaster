import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirradioComponent } from './airradio.component';

describe('AirradioComponent', () => {
  let component: AirradioComponent;
  let fixture: ComponentFixture<AirradioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirradioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
