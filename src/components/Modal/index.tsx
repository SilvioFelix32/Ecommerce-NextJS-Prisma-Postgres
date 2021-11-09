import { Modal as ModalComponent } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from "./styles.module.scss";

interface ModalProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
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
                <input placeholder="Digite Seu email" /> <br />
                <div className="passwordLine">
                    <p>Senha<a>Esqueceu sua Senha?</a></p>
                </div>
                <input
                    placeholder="Digite a sua Senha" /> <br />
            </div>
            <div className={styles.textFooter}>
                <button
                    className={styles.signInButton}
                >Entrar</button>
                <p>Não tem uma conta? <a href="/">Cadastrar</a>.</p>
            </div>
        </ModalComponent>
    );
};