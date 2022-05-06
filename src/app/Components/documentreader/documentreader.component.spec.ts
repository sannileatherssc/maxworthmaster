import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentreaderComponent } from './documentreader.component';

describe('DocumentreaderComponent', () => {
  let component: DocumentreaderComponent;
  let fixture: ComponentFixture<DocumentreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentreaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
