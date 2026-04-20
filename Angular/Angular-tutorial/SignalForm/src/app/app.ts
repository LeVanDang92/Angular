import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Card } from './card/card';
import { Button } from './button/button';
import { FormField } from './form-field/form-field';

@Component({
  selector: 'app-root',
  imports: [FormsModule,ReactiveForm,Card,Button,FormField],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  name = signal('');
  email = signal('');

  submit() {
    console.log('Name:', this.name());
    console.log('Email:', this.email());
  }

 message = '';
 onSave(msg:string){
  this.message = msg;
 }

 _email = '';
 onEmailChange(value:string){
  console.log('Email changed:', value);
  this._email = value;
 }

}
