import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallTestsComponent } from './http-call-tests.component';

describe('HttpCallTestsComponent', () => {
  let component: HttpCallTestsComponent;
  let fixture: ComponentFixture<HttpCallTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCallTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCallTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
