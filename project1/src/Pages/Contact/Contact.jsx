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
            <p>
              Are you ready to start your next project, Contact us below.
            </p>
          </div>

        </div>
       
        <div className='contact-flex'>
          <div className='contactflex1'>
            <h2 style={{ color: '#000' }}>Get in touch</h2>
            <p style={{ fontSize: '14px', marginBottom: '2rem' }}>Our friendly team would love to hear from you about your next Project.</p>
            <div className='fullname'>
              <div className='input-name'>
                <p>First name </p>
                <input type='text' placeholder='First name' />
              </div>
              <div className='input-name'>
                <p>Last name</p>
                <div><input type='text' placeholder='Last name' /></div>
              </div>
            </div>
            <di>Email</di><div style={{ marginBottom: '2rem' }} ><input type='' placeholder='Email' /></div>
            <di>Phone number</di><div style={{ marginBottom: '2rem' }} ><input type='number' placeholder='234 (81) 000-000' /></div>
            <div>Message</div><textarea style={{ marginBottom: '2rem' }} ></textarea>
            <div className='submit'><button style={{ border: 'none' }}>Submit</button></div>

          </div>
          <div className='contactflex2'>
            <div className='contact-image'>
              <img src={Coimage1} alt='' />
            </div>

          </div>
        </div>
        </div>
      <div className='contactinfo' ><ContactInfo /></div>


    </Tiv>
  )
}

export default Contact

const Tiv = styled.div`
    .contact-wrapper {
    padding: 2rem 0rem;
    background-color: #fff;
    font-size: 18px;
    color: #717a8e;
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }  
  .wrapper {
 
   
    background-color: #66d5f3;
    width: 85%;


  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #66d5f3; */
    /* -webkit-animation: sol 5s linear infinite ; */
    /* transition: all 2s; */
    height: 250px;

    line-height: 2.5rem;
    color: #fff;
    font-size: 19px;
  }
  .contact-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    padding: 7rem 4rem;
    /* gap: 40px; */
    gap: 4%;
    height: 650px;
    margin: 3rem 0rem;
    /* border: 1px solid red; */
  }
  .contactflex1 {
    width: 50%;
     height: 750px;
      padding: 18px;
      font-size: 16px;
      /* margin-top: 3rem; */
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .contactflex2 {
    /* width: 100%; */
    width: 50%;
    /* border: 1px solid yellow; */
     
  }
  .contact-image {
    width: 100%;
    /* height: 700px; */
  }
  .contact-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .fullname {
    display: flex;
    justify-content: flex-start;
     align-items: center;
      gap: 35px;
       margin-bottom: 2rem;
  }
  .input-name {
    /* width: 15.4rem; */
    width: 100%;
    /* border: 1px solid red; */
    /* marg */
  }
  input {
    font-size: 15px;
    /* border: none; */
    padding: 8px;
    width: 98%;
    border-radius: 7px;
    /* outline: none; */
    border: 1px solid #ddd;
  }
  input::placeholder {
    font-size: 15px;
  }
  textarea {
    width: 98%;
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
  .contactinfo {
    width: 90%;
     height: 250px;
     padding: 3rem;
     /* margin-top: -120px; */
     background-color: #f9fafb;
     display: flex;
     justify-content: center;
     align-items: center;
  }


  @media screen and (max-width: 1400px) {
    .container {
      line-height: 1rem;
    }
    /* .container h2{
      font-size: 19px;
    } */
    .container p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1143px) {
    .contact-flex{
      gap: 0%;
    }
  }
  @media screen and (max-width: 750px) {
    .contact-wrapper {
      /* display: block; */
    }
    .wrapper {
      width: 80%;
      height: 200px;
    }
    .container {
      line-height: 0.5rem;
    }
    .container p {
      font-size: 13px;
      /* margin-top: -1rem; */
    }
    .contact-flex {
      flex-direction: column-reverse;
      position: relative;
      /* top: -208%; */
      top: 15rem;
      /* width: 100%; */
    }
    .contactflex1 {
      width: 80%;
      margin-top: -28%;
      /* margin-top: -12rem; */
    }
    textarea  {
      height: 9rem;
    }
    .contactflex2 {
      width: 100%;
      /* height: 95%; */
    }
    .contact-image {
      height: 80%;

    }
    .contactflex1 h2 {
      font-size: 28px;
      font-weight: 600;
    }
    .contactinfo {
      position: relative;
      /* top: 8%; */
      top: 22rem;
      margin-bottom: 16rem;
      width: 90%;
    }
  }
   
`