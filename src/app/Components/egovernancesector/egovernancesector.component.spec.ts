import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgovernancesectorComponent } from './egovernancesector.component';

describe('EgovernancesectorComponent', () => {
  let component: EgovernancesectorComponent;
  let fixture: ComponentFixture<EgovernancesectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgovernancesectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgovernancesectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
