import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Modal as ModalComponent } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from "./styles.module.scss";
import { api } from '../../../services/api';

interface ModalProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    selectedUserId: string
}

export function EditUserFom({ isOpen, setIsOpen, selectedUserId }: ModalProps) {
    const onCloseModal = () => setIsOpen(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');


    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            name,
            email,
            password,
            role
        }

        api.put(`/user/${selectedUserId}`, data)
            .then((res) => {
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
                onSubmit={handleSubmit}
                className={styles.createUser}>
                <p>Nome</p>
                <input type="name" value={name} onChange={e => setName(e.target.value)} />
                <p>Email</p>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <p>Senha</p>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <p>Cargo</p>
                <select value={role} onChange={e => setRole(e.target.value)}>
                    <option value="admin">ADMINISTRADOR</option>
                    <option value="user" selected>USUÁRIO</option>
                </select>
                <button
                    type="submit"
                    onClick={onCloseModal}
                >Cadastrar</button>
            </form>
        </ModalComponent>
    );
};