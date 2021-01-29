import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithEmitterComponent } from './child-with-emitter.component';

describe('ChildWithEmitterComponent', () => {
  let component: ChildWithEmitterComponent;
  let fixture: ComponentFixture<ChildWithEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWithEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
