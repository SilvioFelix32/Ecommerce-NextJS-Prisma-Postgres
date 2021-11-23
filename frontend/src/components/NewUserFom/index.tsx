import React, { FormEvent, useState } from 'react';
import { Modal as ModalComponent } from 'react-responsive-modal';
import { api } from '../../../services/api';
import 'react-responsive-modal/styles.css';
import styles from "./styles.module.scss";

interface ModalProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    handleReloadData: (value: number) => void
}

export function NewUserFom({ isOpen, setIsOpen, handleReloadData }: ModalProps) {
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
                handleReloadData(Math.random())
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