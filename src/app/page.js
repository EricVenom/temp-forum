"use client";

import styles from './page.module.css';
import ButtonCreateAcc from '@/components/button';
import SignUpModal from '@/components/SignUpModal';
import { UseGlobalContext } from './Context/store';

export default function Home() {
  const { activeModal } = UseGlobalContext();

  return (
    <div className={styles.container}>

      <div className={styles.main}>
        <h1>Welcome to TempForum!</h1>
        <span className={styles.center}>
          A place where you can share your thoughts to the world and they'll disappear after 24h.
        </span>
      </div>

      {activeModal && <SignUpModal />}

      <div className={styles.main}>
        <form>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Login</button>
          <div>
            <p className={styles.t_link}>Forgot your password?</p>
            <ButtonCreateAcc>Create new account</ButtonCreateAcc>
          </div>
        </form>
      </div>

    </div>
  )
}
