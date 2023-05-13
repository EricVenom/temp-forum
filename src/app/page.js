import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.main}>
        <h1>Welcome to TempForum!</h1>
        <span className={styles.center}>
          A place where you can share your thoughts to the world and they'll disappear after 24h.
        </span>
      </div>

      <div className={styles.main}>
        <form>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Login</button>
          <div>
            <p className={styles.t_link}>Forgot your password?</p>
            <Link href='/signup' className={styles.card}>Create new account</Link>
          </div>
        </form>
      </div>

    </div>
  )
}
