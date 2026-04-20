import { Component, signal ,inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // userService = inject(UserService);
  // users = toSignal<User[]>(this.userService.getUsers());

  users = signal<User[]>([]);
  name = signal('');
  email = signal('');

 edittingUpdateID = signal<number | null>(null);

  constructor(private userService : UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
       this.users.set(data);
     });
  }

  
  editUser(user : User) {

    console.log('Editing user:', user);
    this.edittingUpdateID.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);
  }

  submitForm(){
    const payload : User = {
      name : this.name(),
      email : this.email(),
      isActive : false
    };

    if(this.edittingUpdateID() !== null) {
      this.userService.updateUser(this.edittingUpdateID()!, payload).subscribe((data) => {
        alert('User updated successfully!');
        this.loadUsers();

        this.name.set('');
        this.email.set('');
        this.edittingUpdateID.set(null);
        this.afterSave();
      });
    }
    else 
    {
          this.userService.addUser(payload).subscribe((data) => {
          alert('User added successfully!');
          this.afterSave();
    });  
    }
  
  }

  toggletStatus(user : User) {
    this.userService.updateUserStatus(user.id!, !user.isActive).subscribe((data) => {
      this.loadUsers();
    });
  }

  deleteUser(id? : number) {
    if(confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(()=>{
        alert('User deleted successfully!');
        this.loadUsers();
      })
    }
  }

  afterSave(){
this.loadUsers();

          this.name.set('');
          this.email.set('');
  }


}
