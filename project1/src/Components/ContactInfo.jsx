import React from 'react'
import styled from 'styled-components'

function ContactInfo() {
    return (
        <Fiv>
            <div >
                <div className='contactinfo-career'>
                    <div className='contactinfo-width'>
                        <div className='contactinfo-image'><img src={'./Careerimage/Cimage10.png'}  /></div>
                        <h3 >Location</h3>
                        <div style={{ fontWeight: 'bolder', color: '#38b7ff', textAlign:'center' }}>29A Berkley Street, Lagos Island, Lagos</div>
                    </div>
                    <div className='contactinfo-width'>
                        <div className='contactinfo-image'><img src={'./Careerimage/Cimage11.png'} /></div>
                        <h3 >Phone number</h3>
                        <div style={{ lineHeight: '2rem', fontWeight: 'bolder', color: '#38b7ff',textAlign:'center' }} >+2348182504430 <div>+2348035283267</div><div>+2348034678549</div></div>
                    </div>
                    <div className='contactinfo-width'>
                        <div className='contactinfo-image'><img src={'./Careerimage/Cimage12.png'} /></div>
                        <h3 >mail</h3>
                        {/* <h3 style={{ textAlign: 'center' }}>mail</h3> */}
                        <div >info@tm30.net</div>
                        {/* <div style={{ color: '#38b7ff', fontWeight: 'bolder',textAlign:'center' }}>info@tm30.net</div> */}
                    </div>
                </div>
            </div>
        </Fiv>
    )
}

export default ContactInfo

const Fiv = styled.div `
     .contactinfo-career {
    display: flex;
    /* flex-wrap: wrap; */
    /* justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 2rem;
    /* border: 1px solid red;  */
    flex-wrap: wrap;
    align-content: space-around;
    width: 100%;
    border: 1px solid red; 
    gap: 2rem;

  }
  .contactinfo-width {
     /* width: 50%;  */
    width: 300px;
    height: 250px;
    /* display: block; */
    /* margin-left: 20px; */
    display: flex;
     flex-direction: column;  
    /* justify-content: center; */
    align-items: center;
    border: 1px solid green; 
    padding: 10px;
  }
  .contactinfo-image {
    width: 60px;
    height: 60px;
    text-align: center;
    margin-left: -100%;
    
  }
  .contactinfo-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-left: 140px;
  }


  @media screen and (max-width: 1075px) {
    .contactinfo-career {
      /* width: 90%; */
      gap: 1.5rem;

    }
    .contactinfo-width {
      /* width: 100%; */
      width: 280px;
    }

  }
  @media screen and (max-width: 951px) {
    .contactinfo-career{
      gap: 2.4rem;
      width: 102%;
      display: flex;
      flex-wrap: wrap;
      /* margin-left: -3%; */
    }
    .contactinfo-width {
      width: 26.3%;
      /* width: 250px; */

    }
  .contactinfo-image {
    margin-left: -150%;
    
  }
}
  @media screen and (max-width: 714px) {
    .contactinfo-career{
      width: 84%;
      margin-left: 11%;
    }
    .contactinfo-width {
     
    width: 38.8%;
    font-size: 13px;
    }
  }
  .contactinfo-image {
    margin-left: -110%;
    
  }
  @media screen and (max-width: 600px) {
    .contactinfo-career{
      display: block;
      text-align: center;
      width: 100%;
    margin-left: -10%;
    margin-bottom: 50px;

    }
    .contactinfo-width {
      width: 100%;
      height: 200px;
    }




  }


`