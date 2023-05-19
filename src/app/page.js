"use client";

import styles from './page.module.css';
import ButtonCreateAcc from '@/components/button';
import SignUpModal from '@/components/SignUpModal';
import { UseGlobalContext } from './Context/store';
import { useState } from 'react';
import api from '@/utils/axios';

export default function Home() {
  const { activeModal } = UseGlobalContext();
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  async function handleLogin() {
    try {
      const { data } = await api.post('/login', {
        email: form.email,
        password: form.password
      })
      console.log(data)

      //adicionar token ao localStorage ou Cookies
    } catch (error) {
      console.error(error.response.data)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleLogin()
  }

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
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type='password'
            placeholder='Password'
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

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
