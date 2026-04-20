import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pipe } from 'rxjs';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertPipe } from './pipe/convert-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PipeShortNamePipe,ConvertPipe,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   fullName = 'Mohit Kumar';

   usd = 10;
   usdToInr = 85;
}
