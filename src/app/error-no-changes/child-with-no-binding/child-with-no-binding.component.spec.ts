import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithNoBindingComponent } from './child-with-no-binding.component';

describe('ChildWithNoBindingComponent', () => {
  let component: ChildWithNoBindingComponent;
  let fixture: ComponentFixture<ChildWithNoBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWithNoBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithNoBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
