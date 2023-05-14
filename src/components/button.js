"use client"

import { UseGlobalContext } from '@/app/Context/store';
import styles from './button.module.css';

export default function ButtonCreateAcc({ children }) {
    function handleClick() {
        setActiveModal(!activeModal)
    }

    const { activeModal, setActiveModal } = UseGlobalContext()

    return (
        <button
            type='button'
            className={styles.btn_add}
            onClick={() => handleClick()}
        >
            {children}
        </button>
    )

}