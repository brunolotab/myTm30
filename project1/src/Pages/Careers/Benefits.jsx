import React from 'react'
import styled from 'styled-components'
import { CareerList } from './CareerList';

function Benefits() {

    const OurCareer = CareerList;

    return (
        <Biv>
            <div style={{background:'#f9fafb'}}>
                <div className='wrapper'>
                    <h1 style={{color:'#000'}}>Benefits and Perks of Joining TM30</h1>
                    <p>We are dedicated to making the rest of your life as rewarding as your job.</p>
                </div>
                <div>

                </div>
                <div className='career-flex'>{
                    OurCareer.map((item, id) => (
                        <div key={id} className='career-container'>
                            <div className='career-op'>
                            <div className='career-image'><img src={item.image} alt='' /></div></div>
                            <div style={{textAlign:'center', marginTop:'15px'}}>{item.title}</div>
                        </div>
                    ))


                }

                </div>
            </div>

        </Biv>
    )
}

export default Benefits

const Biv = styled.div `
    /* display: flex;
    justify-content: center;
    width: 100%;
    color: #717a8e; */
.wrapper {
  text-align: center;
  /* width: 80%; */
  /* display: block; */

      /* width: 100%; */
     
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .interest2 p {
    width: 60%;
}
h1 {
  width: 60%;
}
 .career-flex {
    /* display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px;
    padding: 10px;
    border: 1px solid red; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 1rem;
    scale: 0.9;
    /* gap: 0.6rem; */
  }

  .career-container {
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    padding: 10px;
    width: 10%;
    /* width: 120px; */
   

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

    /* width: 100%; */
    
  }
  }
`