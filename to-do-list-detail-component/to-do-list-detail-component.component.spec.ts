import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListDetailComponentComponent } from './to-do-list-detail-component.component';

describe('ToDoListDetailComponentComponent', () => {
  let component: ToDoListDetailComponentComponent;
  let fixture: ComponentFixture<ToDoListDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
