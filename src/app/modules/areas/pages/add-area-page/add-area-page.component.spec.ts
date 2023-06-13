import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAreaPageComponent } from './add-area-page.component';

describe('AddAreaPageComponent', () => {
  let component: AddAreaPageComponent;
  let fixture: ComponentFixture<AddAreaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAreaPageComponent]
    });
    fixture = TestBed.createComponent(AddAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
