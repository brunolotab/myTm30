import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavRoles({name}) {

    const Navigate = useNavigate();

    const handleNewRoles = () => {
        Navigate(name)
    }

    return (
        <>
            <div style={{ padding: '8px' }}>
                <button onClick={handleNewRoles} style={{ padding: '15px 37px', cursor:'pointer', color: '#fff', border: 'none', borderRadius: '10px', background: '#0090ff' }}>
                    View Open Roles
                </button>
            </div>


        </>
    )
}

export default NavRoles