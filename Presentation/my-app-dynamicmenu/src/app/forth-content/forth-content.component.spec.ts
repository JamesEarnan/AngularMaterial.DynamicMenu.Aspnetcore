import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthContentComponent } from './forth-content.component';

describe('ForthContentComponent', () => {
  let component: ForthContentComponent;
  let fixture: ComponentFixture<ForthContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
