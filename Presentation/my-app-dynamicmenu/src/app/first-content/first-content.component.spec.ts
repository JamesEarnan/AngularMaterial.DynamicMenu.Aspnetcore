import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstContentComponent } from './first-content.component';

describe('FirstContentComponent', () => {
  let component: FirstContentComponent;
  let fixture: ComponentFixture<FirstContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
