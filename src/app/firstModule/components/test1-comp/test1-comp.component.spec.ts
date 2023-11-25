import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1CompComponent } from './test1-comp.component';

describe('Test1CompComponent', () => {
  let component: Test1CompComponent;
  let fixture: ComponentFixture<Test1CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test1CompComponent]
    });
    fixture = TestBed.createComponent(Test1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
