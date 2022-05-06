import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationprinterComponent } from './aviationprinter.component';

describe('AviationprinterComponent', () => {
  let component: AviationprinterComponent;
  let fixture: ComponentFixture<AviationprinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationprinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviationprinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
