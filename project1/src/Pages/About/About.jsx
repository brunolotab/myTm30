import React from 'react'
import styled from 'styled-components'
import AboutList from './AboutList'
import Directors from './Directors'

function About() {
    return (
        <Aiv>

            <div className='career-wrapper'>
                <div className="wrapper">
                    <div className='container'>
                        <div className='container1'>
                        <p>About us</p>
                        <h1>
                            Who we are
                        </h1>
                        </div>
                        <div className='container2'>
                            We are a software company with strong technical expertise in developing innovative
                            solutions that drive digital transformation in the IT industry. Leveraging our experience,
                            we deliver our solutions with flexibility, responsiveness, efficiency and unmatched
                            performance which has made us one of the most sought after technology companies.
                        </div>
                    </div>
                </div><br />
                <div className='contain-about'>
                    <p style={{ color: '#66d5f3' }}>We embrace the S.P.I.C.E values</p>
                    <h1 style={{ color: '#000' }}>Our Core Values</h1>
                    <div className='about'>
                        We’re an ambitious and smart team with a shared mission. Our mission is to empower organizations
                        across various sectors to achieve their full potential by providing tailored software solutions that drive
                        efficiency, productivity, and growth. With a team of seasoned experts and a deep understanding of
                        industry trends, we offer an unparalleled suite of software services that cater to diverse business
                        requirements.
                    </div>
                </div>
                <div><AboutList/></div>

                {/* </div> */}
            </div>
            <div style={{background:'#f9fbfa'}}><Directors/></div>

        </Aiv>
    )
}

export default About


const Aiv = styled.div`
      .career-wrapper {
    padding: 2rem ;
    /* padding: 2rem 3rem; */
    /* background-color: #fff; */
    font-size: 18px;
    color: #717a8e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }  
     .wrapper {
    display: flex;
    justify-content: center;
    /* flex-direction: column; */

  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #66d5f3;
    /* -webkit-animation: sol 5s linear infinite ; */
    /* transition: all 2s; */
    width: 60%;
    /* height: 250px; */
    /* line-height: 2rem; */
    color: #fff;
    font-size: 18px;
    padding: 5rem 10rem;
    text-align: center;
  }
  .container1 {
    line-height: 1rem;
  }
  .container2 {
    line-height: 1.8rem;
  }
  .contain-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 4rem 10rem;
    text-align: center;
    
  }
  .about {
    line-height: 1.8rem;
  }


  @media screen and (max-width: 1103px){
        /* .wrapper {
            width: 100%;
        } */
        .container2 {
            font-size: 16px;
        }
        .contain-about {
             padding: 4rem 2rem;
             /* border: 1px solid red; */
            width: 95%;
        }
        .about {
            line-height: 1.8rem;
            font-size: 19.5px;

        }
  }
  @media screen and (max-width: 901px) {
    .contain-about h1 {
        font-size: 23px;
        font-weight: 700;


    }
    .contain-about p {
        font-size: 16px;
        font-weight: bolder;
    }
    .about {
        font-size: 15px;
    }

    
  }

`