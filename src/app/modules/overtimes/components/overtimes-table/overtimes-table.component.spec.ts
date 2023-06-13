import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimesTableComponent } from './overtimes-table.component';

describe('OvertimesTableComponent', () => {
  let component: OvertimesTableComponent;
  let fixture: ComponentFixture<OvertimesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OvertimesTableComponent]
    });
    fixture = TestBed.createComponent(OvertimesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
