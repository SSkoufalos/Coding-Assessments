import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesninterestsComponent } from './hobbiesninterests.component';

describe('HobbiesninterestsComponent', () => {
  let component: HobbiesninterestsComponent;
  let fixture: ComponentFixture<HobbiesninterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesninterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesninterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
