import { CommonModule } from '@angular/common';
import { Component, signal ,inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { formFeature } from './form/form.feature';
import { resetForm, updateFormField } from './form/form.actions';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
private store = inject(Store);

form$ = this.store.select(formFeature.selectFormState);

  updateField(field: 'name' | 'email',value :string){
    this.store.dispatch(updateFormField({field,value}));
  }

  resetForm(){
    this.store.dispatch(resetForm());
  }
}
