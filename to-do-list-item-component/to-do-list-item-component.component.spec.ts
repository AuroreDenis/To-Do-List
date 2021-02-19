import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListItemComponentComponent } from './to-do-list-item-component.component';

describe('ToDoListItemComponentComponent', () => {
  let component: ToDoListItemComponentComponent;
  let fixture: ComponentFixture<ToDoListItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
