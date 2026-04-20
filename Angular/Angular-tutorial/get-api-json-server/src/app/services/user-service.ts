import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

 apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {  }

  // Get all users
  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Add a new user
  addUser (user : User) : Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  
 // Update a user
  updateUser (id : number, user : User) : Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  // Delete a user
  deleteUser (id? : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateUserStatus(id : number, isActive : boolean) : Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${id}`, { isActive });
  }

}
