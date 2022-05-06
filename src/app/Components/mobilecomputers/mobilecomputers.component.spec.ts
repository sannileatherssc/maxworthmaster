import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecomputersComponent } from './mobilecomputers.component';

describe('MobilecomputersComponent', () => {
  let component: MobilecomputersComponent;
  let fixture: ComponentFixture<MobilecomputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilecomputersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecomputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
