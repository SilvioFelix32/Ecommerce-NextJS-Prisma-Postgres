import React, { FormEvent, useEffect, useState } from 'react';
import { Modal as ModalComponent } from 'react-responsive-modal';
import { api } from '../../../services/api';
import 'react-responsive-modal/styles.css';
import styles from "./styles.module.scss";
interface ModalProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    setReloadData: (value: number) => void
    selectedUser: {
        id: number,
        name: string,
        email: string,
        password: string,
        role: string,
    }
}

export function EditUserFom({ isOpen, setIsOpen, selectedUser, setReloadData }: ModalProps) {
    const onCloseModal = () => setIsOpen(false);
    const [name, setName] = useState(selectedUser.name);
    const [email, setEmail] = useState(selectedUser.email);
    const [password, setPassword] = useState(selectedUser.password);
    const [role, setRole] = useState(selectedUser.role);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            name,
            email,
            password,
            role
        };

        api.put(`/user/${selectedUser.id}`, data)
            .then((res) => {
                setReloadData(Math.random())
                onCloseModal()
            })
            .catch((err) => alert("Usuários não encontrados"))
    }

    return (
        <ModalComponent
            classNames={{
                overlay: styles.customOverlay,
                modal: styles.customModal
            }}
            open={isOpen}
            onClose={onCloseModal}
            center>

            <form
                key={selectedUser.id}
                onSubmit={handleSubmit}
                className={styles.createUser}
            >
                <p>Nome</p>
                <input type="name" defaultValue={name} onChange={e => setName(e.target.value)} />
                <p>Email</p>
                <input type="email" defaultValue={email} onChange={e => setEmail(e.target.value)} />
                <p>Senha</p>
                <input type="password" defaultValue={password} onChange={e => setPassword(e.target.value)} />
                <p>Cargo</p>
                <select defaultValue={role} onChange={e => setRole(e.target.value)}>
                    <option value="ADMIN">ADMINISTRADOR</option>
                    <option value="USER">USUÁRIO</option>
                </select>
                <button
                    type="submit"
                    onClick={onCloseModal}
                >Cadastrar</button>
            </form>

        </ModalComponent>
    );
};