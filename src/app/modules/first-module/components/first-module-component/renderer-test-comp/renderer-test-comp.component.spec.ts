import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererTestCompComponent } from './renderer-test-comp.component';

describe('RendererTestCompComponent', () => {
  let component: RendererTestCompComponent;
  let fixture: ComponentFixture<RendererTestCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendererTestCompComponent]
    });
    fixture = TestBed.createComponent(RendererTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
