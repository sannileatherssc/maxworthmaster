import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfidproductComponent } from './rfidproduct.component';

describe('RfidproductComponent', () => {
  let component: RfidproductComponent;
  let fixture: ComponentFixture<RfidproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfidproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfidproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
