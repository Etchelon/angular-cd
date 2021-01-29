import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithBindingComponent } from './child-with-binding.component';

describe('ChildWithBindingComponent', () => {
  let component: ChildWithBindingComponent;
  let fixture: ComponentFixture<ChildWithBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWithBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
