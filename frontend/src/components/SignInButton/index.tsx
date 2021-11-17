import { FaUserCircle } from 'react-icons/fa';
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from 'next-auth/client';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const SignInButton: React.FC<ButtonProps> = ({ ...rest }) => {
    const [session] = useSession();
    const isUserLoggedIn = session; //MUDAR? SÓ RETIRAR E TROCAR O RETURN POR SESSION

    return isUserLoggedIn ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
            {...rest}
        >
            <FaUserCircle color="#ffa601" />
            Usuário
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('Bem Vindo!')}
            {...rest}
        >
            <FaUserCircle color="#fff" />
            Faça seu Login
        </button>
    );
}
