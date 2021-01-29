import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithInjectedParentComponent } from './child-with-injected-parent.component';

describe('ChildWithInjectedParentComponent', () => {
  let component: ChildWithInjectedParentComponent;
  let fixture: ComponentFixture<ChildWithInjectedParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWithInjectedParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithInjectedParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
