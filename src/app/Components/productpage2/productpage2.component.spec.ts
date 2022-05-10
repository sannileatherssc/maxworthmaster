import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productpage2Component } from './productpage2.component';

describe('Productpage2Component', () => {
  let component: Productpage2Component;
  let fixture: ComponentFixture<Productpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productpage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
