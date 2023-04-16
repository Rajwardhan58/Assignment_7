import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrInterComponent } from './str-inter.component';

describe('StrInterComponent', () => {
  let component: StrInterComponent;
  let fixture: ComponentFixture<StrInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrInterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
