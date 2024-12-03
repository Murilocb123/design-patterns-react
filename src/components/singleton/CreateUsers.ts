import { User } from "./domain/User";

/**
 * Classe Singleton para criação e gerenciamento de usuários.
 */
export class CreateUsers {
    private static instance: CreateUsers;
    private users: User[] = [];
    
    private constructor() {
        this.users = JSON.parse(localStorage.getItem('users') || '[]');
    }

    /**
     * Método que retorna uma instância de CreateUsers.
     * Se a instância ainda não existir, uma nova será criada.
     * 
     * @returns {CreateUsers} A instância única de CreateUsers.
     */
    public static getInstance(): CreateUsers {
        if (!this.instance) {
            console.log('Nova Instancia');
            this.instance = new CreateUsers();
        } else {
            console.log('Instancia já criada');
        }
    
        return this.instance;
    }
    
    /**
     * Adiciona um novo usuário à lista de usuários e atualiza o localStorage.
     * 
     * @param {User} user - O usuário a ser adicionado.
     */
    public addUser(user: User): void {
        user.id = this.users.length + 1;
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
    }
    
    /**
     * Retorna a lista de usuários.
     * 
     * @returns {User[]} A lista de usuários.
     */
    public getUsers(): User[] {
        return this.users;
    }

    /**
     * Remove um usuário da lista de usuários pelo ID e atualiza o localStorage.
     * 
     * @param {number} id - O ID do usuário a ser removido.
     */
    public deleteUser(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}