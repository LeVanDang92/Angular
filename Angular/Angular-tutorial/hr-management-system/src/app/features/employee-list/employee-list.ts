import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Employee } from '../../services/employee';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IEmployee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

  private empService = inject(Employee);
  private fb = inject(FormBuilder);
  employees = signal<IEmployee[]>([]);
  selectedEmployeeId = signal<string | null>(null);

  employeeForm = this.fb.group({
    name:'',
    email:'',
    role: '',
    department:''
  })

  ngOnInit(){
   this.loadEmployees();
  }

  editEmployee(emp : IEmployee)
  {
    this.selectedEmployeeId.set(emp.id);

    this.employeeForm.setValue({
      name: emp.name,
      email :emp.email,
      role : emp.role,
      department: emp.department
    })
  }

  deleteEmployee(id :string){
    this.empService.deleteEmployee(id).subscribe((data) =>{
      this.loadEmployees();
    });
  }

  saveEmployee(){
    if(this.selectedEmployeeId() === null)
    {
      // add
      this.empService.addEmployee(this.employeeForm.value).subscribe((data)=>{
        this.employeeForm.reset();
        this.loadEmployees();
      })
    }
    else
    {
      // edit
      this.empService.updateEmployee(this.selectedEmployeeId()!,this.employeeForm.value).subscribe((data)=>{
        this.cancelEdit();
        this.loadEmployees();
      })
    }
  }

  loadEmployees(){
    this.empService.getEmployees().subscribe((data) => {
      this.employees.set(data);
    })
  }

  cancelEdit(){
    this.selectedEmployeeId.set(null);
    this.employeeForm.reset();
  }
}
