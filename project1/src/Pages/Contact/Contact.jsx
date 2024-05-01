import React from 'react'
import styled from 'styled-components'
import Coimage1 from '../../assets/Contactimage/Coimage1.png'
import ContactInfo from '../../Components/ContactInfo'

function Contact() {
    return (
        <Tiv>
            <div className='contact-wrapper'>
                <div className="wrapper">
                    <div className='container'>
                        <h2>
                            Contact Us
                        </h2>
                        <div>
                            Are you ready to start your next project, Contact us below.
                        </div>
                    </div>

                </div>
                <div className='contact-flex'>
                    <div style={{ width: '50%', height: '770px', padding: '15px' }}>
                        <h2 style={{color:'#000'}}>Get in touch</h2>
                        <p style={{fontSize:'14px'}}>Our friendly team would love to hear from you about your next Project.</p>
                        <div style={{display:'flex',justifyContent:'flex-start', alignItems:'center', gap:'65px',lineHeight:'0.1'}}>
                            <div className='input-name'>
                                <p>First name </p>
                                <input type='text' placeholder='First name' />
                            </div>
                            <div className='input-name'>
                                <p>Last name</p>
                                <div><input type='text' placeholder='Last name' /></div>
                            </div>
                        </div><br/>
                        <di>Email</di><div ><input type='' placeholder='Email' /></div><br/>
                        <di>Phone number</di><div><input type='number' placeholder='234 (81) 000-000' /></div><br/>
                        <div>Message</div><textarea></textarea><br/><br/>
                        <div className='submit'><button style={{border:'none'}}>Submit</button></div>

                    </div>
                    <div style={{ width: '50%' }}>
                        <div className='contact-image'>
                            <img src={Coimage1} alt='' />
                        </div>

                    </div>
                </div>

            </div>
            <div style={{width:'100%', height:'250px',padding:'3rem',marginTop:'-120px',backgroundColor:'#f9fafb'}}><ContactInfo/></div>


        </Tiv>
    )
}

export default Contact

const Tiv = styled.div`
    .contact-wrapper {
    padding: 2rem 3rem;
    background-color: #fff;
    font-size: 18px;
    color: #717a8e;

  }  
  .wrapper {
    display: flex;
    justify-content: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #66d5f3;
    /* -webkit-animation: sol 5s linear infinite ; */
    /* transition: all 2s; */
    width: 80%;
    height: 250px;
    line-height: 2.5rem;
    color: #fff;
    font-size: 19px;
  }
  .contact-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 7rem;
    gap: 40px;
    height: 700px;
    margin-top: 4rem;
  }
  .contact-image {
    width: 100%;
    height: 700px;
  }
  .contact-image img {
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
  }
  .input-name input {
    width: 120%;
    /* marg */
  }
  input {
    font-size: 15px;
    /* border: none; */
    padding: 8px;
    width: 100%;
    border-radius: 7px;
    /* outline: none; */
    border: 1px solid #ddd;
  }
  input::placeholder {
    font-size: 15px;
  }
  textarea {
    width: 100%;
    height: 26%;
    border-radius: 7px;
    padding: 10px;
    font-size: 16px;


  }
  textarea:hover {
    border: 1px solid #24b0ff;
    
  }
  .submit, button {
    border: 1px solid #24b0ff;
    width: 100%;
    font-size: 15px;
    text-align: center;
    padding: 5px;
    border-radius: 7px;
    background-color: #24b0ff;
    color: #fff;
    /* margin-top: 10px; */
  }
  input:hover {
    border: 1px solid #24b0ff;
  }
`