import React, { FormEvent, useEffect, useState } from 'react';
import { Modal as ModalComponent } from 'react-responsive-modal';
import { api } from '../../../services/api';
import 'react-responsive-modal/styles.css';
import styles from "./styles.module.scss";

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
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => alert("Usuários não encontrados"));
    }, []);

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
            {
                (users.map((user) => {
                    return (
                        <form
                            key={user.id}
                            onSubmit={handleSubmit}
                            className={styles.createUser}
                        >
                            <p>Nome</p>
                            <input type="name" value={user.name} onChange={e => setName(e.target.value)} />
                            <p>Email</p>
                            <input type="email" value={user.email} onChange={e => setEmail(e.target.value)} />
                            <p>Senha</p>
                            <input type="password" value={user.password} onChange={e => setPassword(e.target.value)} />
                            <p>Cargo</p>
                            {/* Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
                            <select value={user.role} onChange={e => setRole(e.target.value)}>
                                <option value="admin">ADMINISTRADOR</option>
                                <option value="user">USUÁRIO</option>
                            </select>
                            <button
                                type="submit"
                                onClick={onCloseModal}
                            >Cadastrar</button>
                        </form>
                    )
                }
                )
                )
            }
        </ModalComponent>
    );
};