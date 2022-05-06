import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelcomsectorComponent } from './telcomsector.component';

describe('TelcomsectorComponent', () => {
  let component: TelcomsectorComponent;
  let fixture: ComponentFixture<TelcomsectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelcomsectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelcomsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
