// criar uma classe singleton que crie usuarios e os armazene na local storage

import { User } from "./domain/User";

export class CreateUsers {
    private static instance: CreateUsers;
    private users: User[] = [];
    
    private constructor() {
        this.users = JSON.parse(localStorage.getItem('users') || '[]');
    }
    
    public static getInstance(): CreateUsers {
        if (!this.instance) {
            console.log('Nova Instancia');
            this.instance = new CreateUsers();
        }else{
            console.log('Instancia já criada');
        }
    
        return this.instance;
    }
    
    public addUser(user: User): void {
        user.id = this.users.length + 1;
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
    }
    
    public getUsers(): User[] {
        return this.users;
    }

    public deleteUser(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}