import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendlymobilesectorComponent } from './friendlymobilesector.component';

describe('FriendlymobilesectorComponent', () => {
  let component: FriendlymobilesectorComponent;
  let fixture: ComponentFixture<FriendlymobilesectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendlymobilesectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendlymobilesectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
