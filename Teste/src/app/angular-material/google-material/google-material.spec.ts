import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMaterial } from './google-material';

describe('GoogleMaterial', () => {
  let component: GoogleMaterial;
  let fixture: ComponentFixture<GoogleMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
