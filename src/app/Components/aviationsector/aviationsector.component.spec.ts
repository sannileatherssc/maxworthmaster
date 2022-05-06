import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationsectorComponent } from './aviationsector.component';

describe('AviationsectorComponent', () => {
  let component: AviationsectorComponent;
  let fixture: ComponentFixture<AviationsectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationsectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviationsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
