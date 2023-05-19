"use client";

import styles from './SignUpModal.module.css';
import { UseGlobalContext } from '@/app/Context/store';
import api from '../utils/axios';
import { useState } from 'react';

export default function SignUpModal() {
  const { activeModal, setActiveModal } = UseGlobalContext();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  async function handleAxios() {
    try {
      const { data } = await api.post('/login')
      console.log(data.message)
    } catch (error) {
      console.error(error)
    }
  }
  function handleSubmit(e) {
    e.preventDefault()
    handleAxios()
    console.log(form)
  }

  return (
    <div className={styles.backdrop}>
      <form
        className={styles.modal}
        onSubmit={handleSubmit}
      >
        <span
          className={styles.close}
          onClick={() => setActiveModal(!activeModal)}
        >
          +
        </span>

        <input
          type='text'
          placeholder='Name'
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type='text'
          placeholder='Username'
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

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

        <input
          type='password'
          placeholder='Confirm password'
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
        <div>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}