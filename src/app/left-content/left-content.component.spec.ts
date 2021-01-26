import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContentComponent } from './left-content.component';

describe('LeftComponent', () => {
  let component: LeftComponent;
  let fixture: ComponentFixture<LeftComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ LeftComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(LeftComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
