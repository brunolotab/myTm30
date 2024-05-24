import React from 'react'
import styled from 'styled-components'

function ContactInfo() {
  return (
    <Fiv>
      <div >
        <div className='contactinfo-career'>
          <div className='contactinfo-width'>
            <div className='contactinfo-image'><img src={'./Careerimage/Cimage10.png'} /></div>
            <h3 >Location</h3>
            <div style={{ fontWeight: 'bolder', color: '#38b7ff', textAlign: 'center' }}>29A Berkley Street, Lagos Island, Lagos</div>
          </div>
          <div className='contactinfo-width'>
            <div className='contactinfo-image'><img src={'./Careerimage/Cimage11.png'} /></div>
            <h3 >Phone number</h3>
            <div style={{ lineHeight: '2rem', fontWeight: 'bolder', color: '#38b7ff', textAlign: 'center' }} >+2348182504430 <div>+2348035283267</div><div>+2348034678549</div></div>
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

const Fiv = styled.div`
     .contactinfo-career {
    display: flex;
    /* flex-wrap: wrap; */
    /* justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 2rem;
    /* border: 1px solid red;  */
    flex-wrap: wrap;
    /* justify-content: space-around; */
    align-content: space-around;
    /* align-items: center; */
    width: 100%;
    /* background-color: green; */
    /* border: 1px solid red;  */
    /* gap: 2rem; */

  }
  .contactinfo-width {
     /* width: 32%;  */
    width: 300px;
    /* height: 250px; */
    
    display: flex;
     flex-direction: column; 
     justify-content : center;
    align-items: center;
    padding: 10px;
    /* background-color: red; */
  }
  .contactinfo-image {
    width: 60px;
    height: 60px;
    /* display: flex;
    justify-content: center; */
    padding: 1rem;
    /* background-color: yellow; */

    
  }
  .contactinfo-image img {
    width: 100%;
    height: 100%;
  }


  @media screen and (max-width: 1075px) {
    .contactinfo-career {
      /* width: 100%; */
      gap: 1.5rem;
      border: 1px solid red;

    }
    .contactinfo-width {
      /* width: 100%; */
      width: 27%;
      /* width: 280px; */
    }

  }
  @media screen and (max-width: 951px) {
    .contactinfo-career{
      gap: 2.4rem;
      /* width: 80%; */
      display: flex;
      flex-wrap: wrap;
    }
    .contactinfo-width {
      width: 26.3%;

    }
 
}
  @media screen and (max-width: 714px) {
    .contactinfo-career{
      width: 84%;
      display: flex;
      /* flex-wrap: wrap; */
      justify-content: center;
      align-items: center;
      padding: 0 4rem;
      /* align-content: space-around; */
      
    }
    .contactinfo-width {
     
    width: 42%;
    font-size: 16px;
    }
  }
 
  @media screen and (max-width: 542px) {
    
    .contactinfo-width {
      width: 45%;
    }

  }


`