import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionYexperienciaComponent } from './educacion-yexperiencia.component';

describe('EducacionYexperienciaComponent', () => {
  let component: EducacionYexperienciaComponent;
  let fixture: ComponentFixture<EducacionYexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionYexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionYexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
