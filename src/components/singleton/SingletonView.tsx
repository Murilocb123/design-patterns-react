import React, { useState, useEffect } from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CreateUsers } from './CreateUsers'; // Certifique-se de importar corretamente

export default function SingletonView() {
    const [errorsRequired, setErrorsRequired] = useState({
        name: false,
        email: false,
        password: false,
    });

    const [users, setUsers] = useState(CreateUsers.getInstance().getUsers());

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        const user = {
            id: null,
            name: data.get('name') as string,
            email: data.get('email') as string,
            password: data.get('password') as string
        };

        const newErrors = {
            name: !user.name,
            email: !user.email,
            password: !user.password,
        };

        setErrorsRequired(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.password) {
            CreateUsers.getInstance().addUser(user);
            setUsers(CreateUsers.getInstance().getUsers()); // Atualiza a lista de usuários
        }
    };

    const deleteUser = (id: number) => {
        CreateUsers.getInstance().deleteUser(id);
        setUsers(CreateUsers.getInstance().getUsers()); // Atualiza a lista de usuários
    };

    return (
        <div>
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center text-lg">Cadastre Usuarios</h5>
                    <form onSubmit={onSubmit}>
                        <div className="field mt-5">
                            <FloatLabel>
                                <InputText id="name" name="name" />
                                <label htmlFor="name">Nome</label>
                            </FloatLabel>
                            <label htmlFor="name" className={errorsRequired.name ? "text-red-700 text-sm" : "hidden"}>Campo Obrigatorio*</label>
                        </div>
                        <div className="field mt-5">
                            <FloatLabel>
                                <InputText id="email" name="email" />
                                <label htmlFor="email">Email</label>
                            </FloatLabel>
                            <label htmlFor="email" className={errorsRequired.email ? "text-red-700 text-sm" : "hidden"}>Campo Obrigatorio*</label>
                        </div>
                        <div className="field mt-5">
                            <FloatLabel>
                                <InputText id="password" name="password" type="password" />
                                <label htmlFor="password">Senha</label>
                            </FloatLabel>
                            <label htmlFor="password" className={errorsRequired.password ? "text-red-700 text-sm" : "hidden"}>Campo Obrigatorio*</label>
                        </div>
                        <div className="flex justify-content-center">
                            <Button label="Cadastrar" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="card md:pl-8 md:pr-8">
                <h5 className="text-center text-lg">Usuarios Cadastrados</h5>
                <DataTable value={users} >
                    <Column field="name" header="Nome" className="text-center"></Column>
                    <Column field="email" header="Email" className="text-center"></Column>
                    <Column field="password" header="Senha" className="text-center"></Column>
                    <Column body={(rowData: any) => <Button label="Deletar" size="small" severity="danger"
                        onClick={() => deleteUser(rowData.id)} />
                    }
                        className="text-center" />
                </DataTable>
            </div>
        </div>
    );
}
