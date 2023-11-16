import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoPageComponent } from './create-todo-page.component';

describe('CreateTodoPageComponent', () => {
  let component: CreateTodoPageComponent;
  let fixture: ComponentFixture<CreateTodoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTodoPageComponent]
    });
    fixture = TestBed.createComponent(CreateTodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
