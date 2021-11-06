import styles from './styles/styles.module.scss'
import { SignInButton } from "../SignInButton";
import { SideBar } from '../SideBar';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <SideBar />
        <nav>
          <a className={styles.active}>Inicio</a>
          <a>Postagens</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
