import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesOperatorsComponent } from './pipes-operators.component';

describe('PipesOperatorsComponent', () => {
  let component: PipesOperatorsComponent;
  let fixture: ComponentFixture<PipesOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
