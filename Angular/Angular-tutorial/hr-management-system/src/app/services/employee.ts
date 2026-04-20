import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/employees';

  getEmployees() {
    return this.http.get<IEmployee[]>(this.apiUrl);
  }

  deleteEmployee(id :string){
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  addEmployee(data: any){
   return this.http.post<any>(this.apiUrl,data);
  }

  updateEmployee(id:string,data : any){
    return this.http.put<any>(`${this.apiUrl}/${id}`,data);
  }
}
