import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ILeave } from '../../models/leave';
import { Leave } from '../../services/leave';

@Component({
  selector: 'app-leave-list',
  imports: [],
  templateUrl: './leave-list.html',
  styleUrl: './leave-list.css',
})
export class LeaveList {

  private leavesService = inject(Leave);
  leaves = signal<ILeave[]>([]);

  ngOnInit(){
    this.leavesService.getLeaves().subscribe((data)=>{
      this.leaves.set(data);
    })
  }

}
