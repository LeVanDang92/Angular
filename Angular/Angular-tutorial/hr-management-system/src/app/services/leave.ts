import { Injectable ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILeave } from '../models/leave';

@Injectable({
  providedIn: 'root',
})
export class Leave {

  private http = inject(HttpClient);

  private api = "http://localhost:3000/Leaves";

  getLeaves(){
    return this.http.get<ILeave[]>(this.api);
  }

}
