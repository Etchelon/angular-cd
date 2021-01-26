import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSubpropertyComponent } from './change-subproperty.component';

describe('ChangeSubpropertyComponent', () => {
  let component: ChangeSubpropertyComponent;
  let fixture: ComponentFixture<ChangeSubpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSubpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSubpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
