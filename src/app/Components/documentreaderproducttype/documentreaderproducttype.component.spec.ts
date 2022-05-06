import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentreaderproducttypeComponent } from './documentreaderproducttype.component';

describe('DocumentreaderproducttypeComponent', () => {
  let component: DocumentreaderproducttypeComponent;
  let fixture: ComponentFixture<DocumentreaderproducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentreaderproducttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentreaderproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
