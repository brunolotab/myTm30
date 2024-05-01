import React, { useState } from 'react'
import styled from 'styled-components'
import Image2 from '../assets/Modalimage/Image2.jpg'

function ModalRequest({ closeModal }) {

    const [input, setInput]= useState({
        Fullname:'',
        phonenumber:'',
        email: '',
        solution:'',
        message:''
    })

    const handlesubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem('items', JSON.stringify(input));
        setInput({
            Fullname:'',
            phonenumber:'',
            email: '',
            solution:'',
            message:''
        })

    }

    return (
        <Uiv>
            <div>
                <div className='wrapp-flex'>
                    <div className='wrapp-flex1'>

                        <div className='wrapp-img'>
                            <img src={Image2} alt='' className='img' />
                        </div>
                        <form onSubmit={handlesubmit}>
                        <div className='container'>
                            <div style={{position:'relative', left:'150px' }} className='closemodal' onClick={() => closeModal(false)}>X</div>
                            <h2 style={{color:'#484848', paddingBottom:'10px'}}>Request a Demo</h2>
                            <div style={{position:'relative', top:'-18px', fontSize:'17px'}}>Send a message to get started</div>
                            <div className='details' style={{left:'-80px'}}>Full name <span style={{ color: 'red' }}>*</span></div>
                            <div><input type='text'  value={input.Fullname} onChange={(e)=>{setInput({...input, Fullname: e.target.value})}} placeholder='Enter your full name' required /></div>
                            <div className='details' style={{left:'-100px'}}>Email<span style={{ color: 'red' }}>*</span></div>
                            <div><input name='text/number'type='email' placeholder='Enter your email'  value={input.email} onChange={(e)=>{setInput({...input, email: e.target.value})}} required /></div>
                            <div className='details' style={{left:'-70px'}}>Phone number <span style={{ color: 'red' }}>*</span></div>
                            <div><input type='number'  value={input.phonenumber} onChange={(e)=>{setInput({...input, phonenumber: e.target.value})}} placeholder='Enter your phone number' /></div>
                            <div className='details'>solution <span style={{ color: 'red' }}>*</span></div>
                            <div><input type='text' placeholder='select solution' /></div>
                            <div className='details'>message</div>
                            <div><textarea className='msg-box'   value={input.message} onChange={(e)=>{setInput({...input, message: e.target.value})}}></textarea></div>
                            <div ><button type='submit'>submit</button></div>
                        </div>
                        </form>
                        

                    </div>
                </div>
            </div>

        </Uiv>
    )
}

export default ModalRequest

const Uiv = styled.div`
    .wrapp-flex {
        position: fixed;
        top: 0;
        /* left: 250px; */
        border: 1px solid green;
        /* padding: 5px 10px 0px 0px; */
        z-index: 200;
        background-color: rgba(0,0,0,0.3);
        // opacity: 0.85; 
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: flex;
        justify-content: center;
    }
    .wrapp-flex1 {
        display: flex;
        justify-content:flex-start ;
        width: 700px;
        /* max-height: 30rem; */
       max-height: 600px;
        /* overflow: auto; */
        /* left: 250px; */
        z-index: 600;
        align-items: center;
        /* background-color: white; */
        border: 1px solid green;
        
    }
    .wrapp-img {
        width: 300px;
        height: 100%;
        background-color: white;

    }
    .img {
       width: 100%;
       height: 100%;
       object-fit: cover;
        /* padding: 1.2rem 1.5rem; */
    }
    .container {
        /* position: relative; */
        /* top: -80px; */
        width: 400px;
        height: 600px; 
        overflow: auto;

        /* padding: 10px 0px; */
        line-height: 1.2rem;
        background-color: #ffffff;
        /* max-height: 30rem; */
        

        
        /* scale: 0.8; */
        /* font-size: 20px; */
        display: flex;
        flex-direction: column;
        /* justify-content: start; */
        align-items: center;
        color: #a6abbe;

    }
    .closemodal:hover {
        cursor: pointer;
        color: #ffff;
        /* border: 1px solid red; */
        background-color: #000;
        font-weight: bolder ;
        /* padding: 100px; */
    }
    input {
        width: 80%;
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 17px;
        margin-bottom: 10px;
    }
    input::placeholder {
        font-size: 15px;
    }
    .msg-box {
        height: 80px;
        padding: 10px;
        /* width: 80%; */
        width: 205px;
        left: -10px;
        position: relative;



    }
    button {
        color: #fff;
        background-color: blue;
        padding: 10px;
        width: 218px;
        font-size: 14px;
        margin-top: 12px;
        position: relative;
        left: -15px;

    }
.details {
    position: relative;
    left: -90px;
    
}
`