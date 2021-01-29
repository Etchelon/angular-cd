import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNoChangesComponent } from './error-no-changes.component';

describe('ErrorNoChangesComponent', () => {
  let component: ErrorNoChangesComponent;
  let fixture: ComponentFixture<ErrorNoChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorNoChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNoChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
