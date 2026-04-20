import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTodo = signal('');

  todos = signal<{text:string; done:boolean}[]>([]);

  addTodo (){
    const text = this.newTodo().trim();

    if (text) {
      this.todos.update(todos => [...todos, {text, done: false}]);
      this.newTodo.set('');
    }
    else{
      return;
    }
  }
  
  toggleTodo(index:number){
    this.todos.update(todos => {
      const todo = todos[index];
      return [...todos.slice(0, index), {...todo, done: !todo.done}, ...todos.slice(index + 1)];
    });
  }

  deleteTodo(index:number){
    this.todos.update(todos => [...todos.slice(0, index), ...todos.slice(index + 1)]);
  }
}
