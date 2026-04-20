import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.html',
  styleUrl: './form-field.css',
})
export class FormField {
  label = input<string>();
  value = input<string>();
  type = input<string>('text');

  valueChange = output<string>();

  onValueChange(newValue: string) {
    this.valueChange.emit(newValue);
  }
}
