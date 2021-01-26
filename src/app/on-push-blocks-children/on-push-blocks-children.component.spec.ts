import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushBlocksChildrenComponent } from './on-push-blocks-children.component';

describe('OnPushBlocksChildrenComponent', () => {
  let component: OnPushBlocksChildrenComponent;
  let fixture: ComponentFixture<OnPushBlocksChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushBlocksChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushBlocksChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
