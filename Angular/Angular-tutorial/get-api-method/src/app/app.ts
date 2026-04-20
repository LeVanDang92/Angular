import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user';
import { JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
 users : any[] = [];

  constructor(private userService: User) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;

      console.log('Dữ liệu đã về:', this.users);
    });
  }

 userSv = inject(User);

 users1 :any = toSignal(this.userSv.getUsers(), { initialValue: [] });
  

}
