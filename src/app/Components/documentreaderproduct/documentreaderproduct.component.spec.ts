import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentreaderproductComponent } from './documentreaderproduct.component';

describe('DocumentreaderproductComponent', () => {
  let component: DocumentreaderproductComponent;
  let fixture: ComponentFixture<DocumentreaderproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentreaderproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentreaderproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
