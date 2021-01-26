import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContentComponent } from './right-content.component';

describe('RightComponent', () => {
  let component: RightComponent;
  let fixture: ComponentFixture<RightComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ RightComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(RightComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
