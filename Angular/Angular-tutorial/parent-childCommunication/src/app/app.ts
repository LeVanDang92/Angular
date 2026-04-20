import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  userName :string = 'Angular';

  messageReceive = signal('No message received yet.');

  onReceiveMessage(message:string){
    this.messageReceive.set(message);
  }
}
