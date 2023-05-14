"use client";

import styles from './SignUpModal.module.css';
import { UseGlobalContext } from '@/app/Context/store';

export default function SignUpModal() {
    const { activeModal, setActiveModal } = UseGlobalContext();

    return (
        <div className={styles.backdrop}>
            <form className={styles.modal}>
                <span
                    className={styles.close}
                    onClick={() => setActiveModal(!activeModal)}
                >+</span>

                <input type='text' placeholder='Username' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input type='password' placeholder='Confirm password' />
                <div>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}