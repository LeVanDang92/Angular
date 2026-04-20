import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {

    console.log('getUsers called');
    const data = this.http.get(this.apiUrl);
    console.log(data);
    return data;
  }
}
