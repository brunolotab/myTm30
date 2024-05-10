import React from 'react'
import styled from 'styled-components'

function Footbar() {
    return (
        <Tiv>
            <div className='main-container' style={{ padding: '1.5rem' }}>
                <div className='main-wrapper'>
                    <div className='wrapper-1'>
                        <div style={{ fontSize: '30px' }}>tm<span style={{ color: '#00a9ff' }}>30</span></div>
                        <div className='wrapper-mini'>29A Berkley Street, Off King George Road, Onikan Lagos Lagos</div>
                        <div>facbk<span>twiter</span><span>linked</span>youtube</div>
                    </div>
                    <div className='container'>
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
        /* display: block; */
        margin: 6rem 3rem ;
        height: 460px;
        /* padding-bottom: 1.4rem; */
        /* gap: 200px; */
        /* border-bottom: 1px solid grey; */
        /* justify-content: left; */
        justify-content: space-between;
        align-items: flex-start;


    }
    .wrapper-1 {
        position: relative;
        line-height: 4rem;
        color: #717a8e;

        /* top:-30px; */
        

    }
    .container {
        /* display: flex; */
        /* flex-direction: column; */
        align-items: start;
        /* justify-content: space-around; */
        /* justify-content: center; */
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 90px;

       
    }
    .wrapper-2 {
        /* display: flex; */
        /* flex-direction: column; */
        /* align-items: start; */
        /* justify-content: start;  */
        /* justify-content: space-between; */

        font-size: 14px;
        line-height: 1.6rem;
        border: 1px solid red;

    }
   
    .wrapper-3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 3rem ;
        border-top: 1px solid #bbb;
        font-size: 12px;
        font-weight: bolder;
        color: #717a8e;
        /* position: relative;
        top: -220px;*/
        line-height: 5.4rem;  
        margin-top: -150px;
    }

    @media screen and (max-width: 1075px ) {
        .main-wrapper{
            display: block;
        }
        .container{
            display: flex;
             justify-content: space-between;
             /* width: 500px; */

            /* justify-content: start; */
        /* align-items: start; */

        }
        .wrapper-1{
            line-height: 4rem;
        }
        .wrapper-2 {
        /* display: flex; */
        /* flex-direction: column; */
        /* align-items: start; */
        justify-content: space-between;
        font-size: 14px;
        /* line-height: 0.6rem; */
        border: 1px solid green;
    }
    p {
        padding: 1px;
        width: 130px;
    }
    .wrapper-3 {
        margin-top: 150px;
        
    }

    }
    @media screen and (max-width: 695px){
        .container {
            font-size: 12px;
            /* scale: 0.90; */
            margin-left: -4px;
        }
        .main-container {
            margin-left: -20px;

        }
    }
    @media screen and (max-width: 600px) {
        .main-container {
            scale: 0.88;
            margin-top: -150px;
            margin-left: -60px;

        }
        .wrapper-1 {
            /* width: 100%; */
            /* line-height: normal; */
            width: 470px;
        }
       .wrappermini {
        line-height: normal;
       }
        .container {
            column-gap: 50px;
            padding: 4px;
        }
        p {
        /* padding: 2px; */
        width: 120px;
        border: 1px solid yellow;
        
        }
        .main-wrapper {
            /* margin-left: -5px; */
            padding: 10px;
        }
        .wrapper-3 {
        line-height: 4.8rem;
        width: 490px;
        /* margin-left: 80px; */
        
        
    }

}

`