"use client";

import { createContext, useContext, SetStateAction, useState } from "react";

const GlobalContext = createContext({
    activeModal: false
})

export const GlobalContextProvider = ({ children }) => {
    const [activeModal, setActiveModal] = useState(false);

    return (
        <GlobalContext.Provider value={{ activeModal, setActiveModal }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const UseGlobalContext = () => useContext(GlobalContext);