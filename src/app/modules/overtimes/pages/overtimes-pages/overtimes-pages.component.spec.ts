import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimesPagesComponent } from './overtimes-pages.component';

describe('OvertimesPagesComponent', () => {
  let component: OvertimesPagesComponent;
  let fixture: ComponentFixture<OvertimesPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OvertimesPagesComponent]
    });
    fixture = TestBed.createComponent(OvertimesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
