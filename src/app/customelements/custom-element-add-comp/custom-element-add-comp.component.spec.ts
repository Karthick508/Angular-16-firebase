import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomElementAddCompComponent } from './custom-element-add-comp.component';

describe('CustomElementAddCompComponent', () => {
  let component: CustomElementAddCompComponent;
  let fixture: ComponentFixture<CustomElementAddCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomElementAddCompComponent]
    });
    fixture = TestBed.createComponent(CustomElementAddCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
