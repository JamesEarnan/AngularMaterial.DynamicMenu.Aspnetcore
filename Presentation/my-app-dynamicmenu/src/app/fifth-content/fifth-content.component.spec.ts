import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthContentComponent } from './fifth-content.component';

describe('FifthContentComponent', () => {
  let component: FifthContentComponent;
  let fixture: ComponentFixture<FifthContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
