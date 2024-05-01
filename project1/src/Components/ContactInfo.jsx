import React from 'react'
import styled from 'styled-components'

function ContactInfo() {
    return (
        <Fiv>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                <div className='contactinfo-career'>
                    <div className='contactinfo-width'>
                        <div className='contactinfo-image'><img src={'./Careerimage/Cimage10.png'}  /></div><h3 style={{ textAlign: 'center' }}>Location</h3>
                        <div style={{ fontWeight: 'bolder', color: '#38b7ff', textAlign:'center' }}>29A Berkley Street, Lagos Island, Lagos</div>
                    </div>
                    <div className='contactinfo-width'>
                        <div className='contactinfo-image'><img src={'./Careerimage/Cimage11.png'} /></div><h3 style={{ textAlign: 'center' }}>Phone number</h3>
                        <div style={{ lineHeight: '2rem', fontWeight: 'bolder', color: '#38b7ff',textAlign:'center' }} >+2348182504430 <div>+2348035283267</div><div>+2348034678549</div></div>
                    </div>
                    <div className='contactinfo-width'>
                        <div className='contactinfo-image'><img src={'./Careerimage/Cimage12.png'} /></div><h3 style={{ textAlign: 'center' }}>mail</h3>
                        <div style={{ color: '#38b7ff', fontWeight: 'bolder',textAlign:'center' }}>info@tm30.net</div>
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
    justify-content: space-around;
    align-items: center;
    width: 80%;
    gap: 1rem;
  }
  .contactinfo-width {
    width: 450px;
    height: 250px;
    margin-left: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contactinfo-image {
    width: 60px;
    height: 60px;
  }
  .contactinfo-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-left: 140px;
  }

`