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
       
        margin: 6rem 3rem ;
        height: 460px;
    
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
       
        /* align-items: start; */
        
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 90px;

       
    }
    .wrapper-2 {
   

        font-size: 14px;
        line-height: 1.6rem;
        /* border: 1px solid red; */

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
       
        line-height: 5.4rem;  
        margin-top: -150px;
        width: 90%;
    }

    @media screen and (max-width: 1075px ) {
        .main-container{
            /* margin-top: 200px; */
            /* border: 1px solid red; */
            /* width: 90%; */
            
        }
        .main-wrapper{
            display: block;
           
        }
        .container{
            display: flex;
             justify-content: space-between;
             
           

        }
        .wrapper-1{
            line-height: 4rem;
        }
        .wrapper-2 {
       
        
        font-size: 14px;
       
        /* border: 1px solid green; */
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
    @media screen and (max-width: 613px)  {
        .main-container {
            /* scale: 0.99; */
            /* margin-top: -150px; */
            margin-left: 2%;
            /* width: 10px; */
            border: 1px solid blue;
            /* margin-right: -200%; */

        }
        .main-wrapper {
            position: relative;
           top: -100px;
           padding-left: -40%;
        }
        .wrapper-1 {
           
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
       
        width: 110px;
        /* border: 1px solid yellow; */
        
        }
        
        .wrapper-3 {
        line-height: 4.8rem;
        position: relative;
           top: -150px;
           /* padding-left: 40%; */
        
    }
    @media screen and (max-width: 521px) {
        .main-container {
            margin-top: -5px;
            position: relative;
            left: -2%;
            /* margin-left: 2%; */
        }
        .wrapper-mini {
            line-height: normal;
        }
        
        .wrapper-1 {
            width: 99%;
            /* ma-top: -800px; */
        }
        .wrapper-2{
            margin-bottom: 3%;
        }
        .wrapper-3 {
            margin-right: -10px; 
            margin-top: 50%;
            /* margin-top: 220px; */
            line-height: 1.6rem;
        }
    }
        
    @media screen and (max-width: 473px) {
        .main-container {
            margin-left: 3%;
            
        }
        p {
       
       width: 85px;
       
       }
       .container {
        column-gap: 1%;
        /* column-gap: 20px; */
       }
    
       
    }

}

`