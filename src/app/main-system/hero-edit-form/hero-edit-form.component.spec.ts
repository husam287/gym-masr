import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEditFormComponent } from './hero-edit-form.component';

describe('HeroEditFormComponent', () => {
  let component: HeroEditFormComponent;
  let fixture: ComponentFixture<HeroEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
