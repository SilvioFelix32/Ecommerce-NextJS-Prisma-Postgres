import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import styles from './styles/Teste.module.scss'

export default function Home() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    }

    await signIn(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} /> <br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button type="submit">Entrar</button>
      </form>
    </>

  )
}