import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { counterFeature } from './store/counter.feature';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

    counter$! : Observable<number>;

  constructor(private store: Store) {
    this.counter$ = this.store.select(counterFeature.selectCounterState);
  }

  inc(){
    this.store.dispatch(increment());
  }

  dec(){
     this.store.dispatch(decrement());
  }

  reset(){
     this.store.dispatch(reset());
  }
}
