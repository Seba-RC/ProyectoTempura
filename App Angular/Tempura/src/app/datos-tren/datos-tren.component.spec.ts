import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTrenComponent } from './datos-tren.component';

describe('DatosTrenComponent', () => {
  let component: DatosTrenComponent;
  let fixture: ComponentFixture<DatosTrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosTrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosTrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
