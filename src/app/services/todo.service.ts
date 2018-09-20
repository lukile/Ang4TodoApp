import { Injectable } from '@angular/core';
import {Todo} from '../classes/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, 'Play with cat'),
      new Todo(1, 'Make dinner'),
      new Todo(2, 'Play video game'),
      new Todo(3, 'Buy more RAM')
    ];
    this.nextId = 4;
  }

  public addTodo(text: string): void {
    console.log('TODO : ', this.todos);
    const todo = new Todo(this.nextId, text);

    this.todos.push(todo);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
