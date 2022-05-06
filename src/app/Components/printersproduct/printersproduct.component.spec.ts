import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintersproductComponent } from './printersproduct.component';

describe('PrintersproductComponent', () => {
  let component: PrintersproductComponent;
  let fixture: ComponentFixture<PrintersproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintersproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintersproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
