import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectInputPushComponent } from './object-input-push.component';

describe('ObjectInputPushComponent', () => {
  let component: ObjectInputPushComponent;
  let fixture: ComponentFixture<ObjectInputPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectInputPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectInputPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
