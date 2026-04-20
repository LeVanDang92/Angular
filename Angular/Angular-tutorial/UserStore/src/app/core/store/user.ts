import { Injectable, signal } from "@angular/core";

interface User {
    id : number;
    name: string;
    email: string;
    role : 'admin' | 'user';
}

@Injectable({   
    providedIn: 'root'
})
export class UserStore {
    
user = signal(<User | null> null);

login(name: string, email: string, role: 'admin' | 'user') {
    const id = Math.floor(Math.random() * 1000);
    this.user.set({ id, name, email, role });
}

logout (){
    this.user.set(null);
}

isAdmin(){
    return this.user()?.role === 'admin';
}

}