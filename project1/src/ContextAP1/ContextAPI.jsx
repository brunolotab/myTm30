import { createContext, useState } from "react";


export const ContextAPI = createContext();

const ContextAPIProvider = ({children}) => {

    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);
    const [openModal5, setOpenModal5] = useState(false);
    const [openModal6, setOpenModal6] = useState(false);
    const [openModal7, setOpenModal7] = useState(false);
    const [openModal8, setOpenModal8] = useState(false);


return(
    <ContextAPI.Provider value={{
        openModal2, setOpenModal2,
        openModal3, setOpenModal3,
        openModal4, setOpenModal4,
        openModal5, setOpenModal5,
        openModal6, setOpenModal6,
        openModal7, setOpenModal7,
        openModal8, setOpenModal8

    }}>{children}
    </ContextAPI.Provider>
)
    
}
export default ContextAPIProvider