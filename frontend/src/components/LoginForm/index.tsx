import React, { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Modal as ModalComponent } from 'react-responsive-modal';
import Link from "next/link";
import 'react-responsive-modal/styles.css';
import styles from "./styles.module.scss";

interface ModalProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

export function LoginForm({ isOpen, setIsOpen }: ModalProps) {
    const onCloseModal = () => setIsOpen(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            email,
            password
        }

        await signIn(data);
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
            <form onSubmit={handleSubmit} className={styles.modalContext}>
                <h2>Entre com sua conta</h2> <br />
                <p>Email</p>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} /> <br /> 
                <div className="passwordLine">
                    <p>Senha<a href="/coming-soon">Esqueceu sua Senha?</a></p>
                </div>
                <input
                    type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <div
                    className={styles.checkbox}>
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        placeholder=""
                    />
                    <label htmlFor="remember">Salvar Senha?</label>
                </div>
                <div className={styles.textFooter}>
                    <button
                        type="submit"
                        onClick={onCloseModal}
                        className={styles.signInButton}
                    >Entrar</button>
                    <p>Não tem uma conta?<Link href="/coming-soon">Cadastrar</Link>.</p>
                </div>
            </form>
        </ModalComponent>
    );
};