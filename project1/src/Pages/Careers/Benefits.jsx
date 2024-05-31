import React from 'react'
import styled from 'styled-components'
import { CareerList } from './CareerList';

function Benefits() {

  const OurCareer = CareerList;

  return (
    <Biv>
      <div className='containers'>
        <div className='wrappers'>
          <h1 data-aos="zoom-in" style={{ color: '#000' }}>Benefits and Perks of Joining TM30</h1>
          <p data-aos="zoom-in" data-aos-delay="300">We are dedicated to making the rest of your life as rewarding as your job.</p>
        </div>
        <div className='career-flex'>{
          OurCareer.map((item, id) => (
            <div key={id} className='career-container' data-aos="zoom-in">
              <div className='career-op'>
                <div className='career-image'><img src={item.image} alt='' /></div></div>
              <div style={{ textAlign: 'center', marginTop: '15px' }}>{item.title}</div>
            </div>
          ))


        }

        </div>
      </div>

    </Biv>
  )
}

export default Benefits

const Biv = styled.div`
   width: 100%;
.containers {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
}
.wrappers {
  text-align: center;
}
.wrappers p {
  font-size: 14px;
  color: #565656;

}
.career-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}


  .career-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* padding: 10px; */
    color: #565656;
    width: 130px;
    margin: 30px;
   

  }
  .career-op {
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 50%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



  }
  .career-image {
    width: 50%;
    height: 40%;
    /* text-align: center; */
    /* object-fit: cover; */
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1150px){
    .containers{
      margin: 0px;
      padding: 0px;
      width: 100%;
      /* padding: 20px; */
    }
    .career-container {
      margin: 20px;
    }

  }
  @media screen and (max-width: 990px){
    .career-container {
      margin: 10px;
    }

  }


  @media screen and (max-width: 961px){
    .career-flex {
    
    /* grid-template-columns: repeat(3, 1fr); */
    flex-wrap: wrap;
    align-content: space-around;
  
    .career-container {
      width: 30%;
      /* border: 1px solid red; */
    margin-bottom: 20px;
    }
    .wrappers {
      width: 100%;
    }

    
  }
  }
`