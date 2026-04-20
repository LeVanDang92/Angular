import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  name = input<string>();

  message = signal('Hello from child component!');

  onSendMessage(){
    this.message.set('Message sent from child component!');
  }
}
