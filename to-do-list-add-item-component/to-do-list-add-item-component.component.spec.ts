import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListAddItemComponentComponent } from './to-do-list-add-item-component.component';

describe('ToDoListAddItemComponentComponent', () => {
  let component: ToDoListAddItemComponentComponent;
  let fixture: ComponentFixture<ToDoListAddItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListAddItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListAddItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
