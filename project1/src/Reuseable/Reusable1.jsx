import React from 'react'
import styled from 'styled-components'

function Reusable1() {
    return (
        <Biv>
            <div>
                <section>
                    <div className='section-container'>
                        <div className='image'><img src={('../Pimage6.gif')} alt='' /></div>
                        <h3>Inspired by people</h3>
                        <p>
                            People are the focal point of everything we do. Our daily task is to deliver transaction solutions
                            that empower modern businesses and people to thrive.
                        </p>
                    </div>

                    <div className='section-container'>
                        <div className='image'><img src={('./Pimage7.gif')} alt='' /></div>
                        <h3>Driven by Values </h3>
                        <p>
                            Values drive our decisions and actions. Everyone is a stakeholder;
                            we do what it takes to get it right the first time and all the time.
                        </p>
                    </div>

                    <div className='section-container'>
                        <div className='image'><img src={('./Pimage8.gif')} alt='' /></div>
                        <h3>Focused on Scaling</h3>
                        <p>
                            Regardless of how large we scale, we retain the agility of a startup and remain focused on
                            creating the best solutions possible for our clients.
                        </p>
                    </div>
                </section>
            </div>

        </Biv>
    )
}

export default Reusable1

const Biv = styled.div `
    
    section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    /* width: 75rem; */
    /* height: 35rem; */
    scale: 0.85;
    /* padding-left: 3rem; */
  }
  .section-container {
    border: 1px solid #ddd;
    border-radius: 30px;
    line-height: 1.8rem;
    padding: 18px 18px 12px 18px;
    font-size: 18px;
    box-shadow: 5px 10px 8px #2222;
  } 
  .image {
    width: 80px;
    height: 80px;
    margin-left: 20px;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  @media screen and (max-width: 436px){
  section {
        gap: 20px;
  }
}
  
`