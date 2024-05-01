import React from 'react'
import styled from 'styled-components'

function Footbar() {
    return (
        <Tiv>
            <div style={{ padding: '1.5rem' }}>
                <div className='main-wrapper'>
                    <div className='wrapper-1'>
                        <div style={{ fontSize: '30px' }}>tm<span style={{ color: '#00a9ff' }}>30</span></div>
                        <div>29A Berkley Street, Off King George Road, Onikan Lagos Lagos</div>
                        <div>facbk<span>twiter</span><span>linked</span>youtube</div>
                    </div>
                    <div className='wrapper-2'>
                        <h4 style={{ color: '#00a9ff' }}>Product</h4>
                        <p>Paymybills</p>
                        <p>Edusponsor</p>
                        <p>Backup cash</p>
                        <p>Residify</p>
                        <p>AdashiEsususAkawo</p>
                    </div>
                    <div className='wrapper-2'>
                        <h4 style={{ color: '#00a9ff' }} >Solution</h4>
                        <p>Agency Banking</p>
                        <p>Bank Pro</p>
                        <p>SoftPOS</p>
                        <p>TMSaas</p>
                        <p>ESMP</p>
                        <p>SEAP</p>
                    </div>
                    <div className='wrapper-2'>
                        <h4 style={{ color: '#00a9ff' }}>Company</h4>
                        <p>About us</p>
                        <p>Career</p>
                        <p>Products</p>
                        <p>Projects</p>
                        <p>Contact</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='wrapper-3'>
                    <div>powered by<span style={{ color: '#00a9ff' }}>TM30 Global</span></div>
                    <div>© 2023 TM30 Global Limited.<span>All rights reserved.</span> </div>
                </div>
            </div>
        </Tiv>
    )
}

export default Footbar

const Tiv = styled.div`
    .main-wrapper {
        display: flex;
        justify-content: space-around;
        margin: 1rem 3rem ;
        height: 460px;
        border-bottom: 1px solid grey;

    }
    .wrapper-1 {
        position: relative;
        line-height: 4rem;
        color: #717a8e;

        /* top:-30px; */
        

    }
    .wrapper-2 {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .wrapper-3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 3rem ;

        font-size: 12px;
        font-weight: bolder;
        color: #717a8e;
    }
`