import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDattailComponent } from './item-dattail.component';

describe('ItemDattailComponent', () => {
  let component: ItemDattailComponent;
  let fixture: ComponentFixture<ItemDattailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDattailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDattailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
