import { FaUserCircle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/client';


export function SignInButton() {
    const [session] = useSession();
    const isUserLoggedIn = session; //MUDAR? SÓ RETIRAR E TROCAR O RETURN POR SESSION

    return isUserLoggedIn ? (
        <button 
        type="button" 
        className={styles.signInButton}
        onClick={() => signOut()}
        >
            <FaUserCircle color="#2C6BC9" />
             Usuário
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')} 
            >
            <FaUserCircle color="#FF8C00" />
             Entrar
        </button>
    );
}
