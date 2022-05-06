import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessproductComponent } from './wirelessproduct.component';

describe('WirelessproductComponent', () => {
  let component: WirelessproductComponent;
  let fixture: ComponentFixture<WirelessproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WirelessproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
