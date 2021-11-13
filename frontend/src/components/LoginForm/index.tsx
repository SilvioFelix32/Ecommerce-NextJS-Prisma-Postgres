import React from 'react';
import { baseApiUrl, userKey } from '../../global'
import Link from "next/link";
import { Modal as ModalComponent } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from "./styles.module.scss";

interface ModalProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

export const LoginForm = ({ isOpen, setIsOpen }: ModalProps) => {
    const onCloseModal = () => setIsOpen(false);

    return (
        <ModalComponent
            classNames={{
                overlay: styles.customOverlay,
                modal: styles.customModal
            }}
            open={isOpen}
            onClose={onCloseModal}
            center>
            <div className={styles.modalContext}>
                <h2>Entre com sua conta</h2> <br />
                <p>Email</p>
                <input placeholder="Digite seu email" /> <br />
                <div className="passwordLine">
                    <p>Senha<a href="/coming-soon">Esqueceu sua Senha?</a></p>
                </div>
                <input
                    placeholder="Digite a sua Senha" />
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
            </div>
            <div className={styles.textFooter}>
                <button
                    /* onClick="location.href='404.svg';" */
                    className={styles.signInButton}
                >Entrar</button>
                <p>Não tem uma conta? <Link href="/coming-soon">Cadastrar</Link>.</p>
            </div>
        </ModalComponent>
    );
};