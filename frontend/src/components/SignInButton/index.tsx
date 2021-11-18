import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import styles from "./styles.module.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const SignInButton: React.FC<ButtonProps> = ({ ...rest }) => {
    const { user, signOut } = useContext(AuthContext)

    return user ? (
        <button
            type="button"
            className={styles.signInButton}
            {...rest}
            onClick={() => signOut()}
        >
            <FaUserCircle color="#ffa601" />{user.name}
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            {...rest}
        >
            <FaUserCircle color="#fff" />
            Faça seu Login
        </button>
    );
}
