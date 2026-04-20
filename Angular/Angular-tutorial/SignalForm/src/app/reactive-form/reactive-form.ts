import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  userSignal = signal({
    name: '',
    email: '',
  });



fb = inject(FormBuilder);
form :any;
  constructor() {
  this.form = this.fb.group({
    name: [''],
    email: [''],
  });

   this.form .valueChanges.subscribe((value:any) => {
    this.userSignal.set(value);
  });
  }

  submitForm() {
    console.log('Form Value:', this.form.value);
    console.log('User Signal:', this.userSignal());
  }
}
