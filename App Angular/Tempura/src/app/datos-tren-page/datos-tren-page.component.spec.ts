import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTrenPageComponent } from './datos-tren-page.component';

describe('DatosTrenPageComponent', () => {
  let component: DatosTrenPageComponent;
  let fixture: ComponentFixture<DatosTrenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosTrenPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosTrenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
