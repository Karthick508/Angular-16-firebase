import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModuleCompComponent } from './second-module-comp.component';

describe('SecondModuleCompComponent', () => {
  let component: SecondModuleCompComponent;
  let fixture: ComponentFixture<SecondModuleCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondModuleCompComponent]
    });
    fixture = TestBed.createComponent(SecondModuleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
