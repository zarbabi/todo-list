import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTodoComponent } from './done-todo.component';

describe('DoneTodoComponent', () => {
  let component: DoneTodoComponent;
  let fixture: ComponentFixture<DoneTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoneTodoComponent]
    });
    fixture = TestBed.createComponent(DoneTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
