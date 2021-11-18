import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Modal as ModalComponent } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from "./styles.module.scss";
import { api } from '../../../services/api';

interface ModalProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

export function NewUserFom({ isOpen, setIsOpen }: ModalProps) {
    const onCloseModal = () => setIsOpen(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            name,
            email,
            password
        }

        api.post(`/user`, data)
            .then((res) => {
                onCloseModal()
            })
            .catch((err) => alert("Usuários não encontrados"));
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
                <button
                    type="submit"
                >Cadastrar</button>
            </form>
        </ModalComponent>
    );
};