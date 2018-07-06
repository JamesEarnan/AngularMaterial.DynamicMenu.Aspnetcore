import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthContentComponent } from './sixth-content.component';

describe('SixthContentComponent', () => {
  let component: SixthContentComponent;
  let fixture: ComponentFixture<SixthContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
