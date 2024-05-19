import React from 'react'
import Reusable1 from '../../Reuseable/Reusable1'
import styled from 'styled-components'
import Benefits from './Benefits'
import ContactInfo from '../../Components/ContactInfo'

function Careers() {
  // const OurCareer = CareerList;
  return (
    <Civ>
      <div className='career-wrapper'>
        <div className="wrapper">
          <div className='container'>
            <h1>
              Join the A-Class team for Go-getters
            </h1>
            <div className='containerhead'>
              You need more than talent to change the world. We have put together an amazing team of
              optimistic and goal-driven Clever Tigers with passion and skill sets. We encourage diversity and we are open to meeting just about anyone with the right passion and skills regardless of looks, gender, color, tribe, nationality, and disability. At TM30 GLOBAL, the best minds collaborate to create sustainable solutions. It is more than just a job, it’s a commitment to doing beyond our best, and getting it right the first time.
            </div>
          </div>

        </div>
        <div className='interest'>
          <div style={{ textAlign: 'center', margin: '100px 0px 10px 0px', color: '#000' }}><h1>Thank you for your interest in joining our team!</h1></div>
          <div className='interest2'><p>We believe work is more than a desk or a to-do list. We believe work should empower a better life. We’re: </p></div>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <Reusable1 />
        </div>
      </div>
      <div>
        <div style={{ background: '#f9fafb', width: '100%'}}><Benefits /></div>

      </div>
      <div style={{ textAlign: 'center', padding: '2rem 2rem 0rem 2rem', background: '#fff', color: '#717a8e' }}>
        <h1 style={{ color: '#000' }}>Join us at TM30 Academy </h1>
        <div className='academy'><p>Read and learn more about our engineering academy, and how you can become a software developer</p></div>
        <div className='learnfree'>
          <div className='img07'><img src={('./Careerimage/Cimage7.png')} alt='' /></div>
        </div>
        <div className='circles' >
          <div className='purpple'>
            <div className='white'></div>
          </div>
        </div>

      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '3rem', justifyContent: 'center', background: '#f9fafb' }}>
        <div className='open-career'>
          <p style={{ background: '#c6eaff', padding: '2px 15px', color: '#717a8e', borderRadius: '30px' }}> Open Positions</p>
          <h1>We’re looking for talented people</h1>
          <p className='philosophy'>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p><br />
          <div className='img08'><img src={'./Careerimage/Cimage8.png'} alt='' /></div><br />
          <div className='position'><p>There are no open positions for now.</p></div>
          <br /><br />
          <div><img src={'./Careerimage/Cimage9.png'} alt='' /></div>
          {/* <div className='contact-career'>
                        <div>
                            <div className='contact-image'><img src={'./Careerimage/Cimage10.png'} style={{paddingLeft:'90px'}}/></div><h3 style={{ textAlign:'center'}}>Location</h3>
                            <div style={{lineHeight:'3rem',fontWeight:'bolder',color:'#38b7ff'}}>29A Berkley Street, Lagos Island, Lagos</div>
                        </div>
                        <div>
                            <div  className='contact-image'><img src={'./Careerimage/Cimage11.png'}/></div><h3 style={{ textAlign:'center'}}>Phone number</h3>
                            <div style={{lineHeight:'2rem',fontWeight:'bolder', color:'#38b7ff'}} >+2348182504430 <div>+2348035283267</div><div>+2348034678549</div></div>
                        </div>
                        <div>
                            <div className='contact-image'><img src={'./Careerimage/Cimage12.png'}/></div><h3 style={{textAlign:'center'}}>mail</h3>
                            <div style={{color:'#38b7ff',fontWeight:'bolder'}}>info@tm30.net</div>
                        </div>
                    </div> */}
          <ContactInfo />
        </div>
      </div>


    </Civ>
  )
}

export default Careers

const Civ = styled.div`
    width: 100%;
  .career-wrapper {
    padding: 2rem 3rem;
    /* background-color: #fff; */
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
    /* width: 54%; */
    height: 250px;
    line-height: 2rem;
    color: #fff;
    font-size: 19px;
    padding: 6rem 12rem;
    text-align: center;
  }
  .containerhead {
    font-size: 16.5px;
    color: #fff;
  }
  .interest2 {
    text-align: center;
    font-size: 21px;
     line-height: 2rem;
      padding-bottom: 20px;
    
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .interest2 p {
    width: 66%;
  }
  .academy  {
    width: 45%;
    padding-left: 28%;
    text-align: center;
    
    
  }
  .learnfree {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
  }
  .circles {
    /* float: right;  */
    padding: 0rem 8.8rem 0rem 0rem;
     position: relative;
      top: -52px;
      padding-left: 81%;
      margin-bottom: -50px;
  }
  .purpple {
    width: 100px;
    /* width: 100px; */
    height: 100px;
    border-radius: 50%;
    background-color: #ceaffe;
    /* padding: 10px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .white {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
  }
  .img07 {
    width: 70%;
    /* width: 900px; */
    height: 220px;
    z-index: 50;
  }
  .img07 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .open-career {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    /* padding: 20px; */
  }
  /* .open-career p {
    padding: 8px;
    border-radius: 30px;
    border: 1px solid gray;
    background-color: #c6eaff;
  } */
  .philosophy {
    text-align: center;
     line-height: 1.5rem;
      color:#717a8e;
       margin-bottom: 3rem;
       width: 45%;
  }
  .img08 {
    width: 68%;
    /* width: 900px; */
    height: 300px;
    margin-bottom: 10px;
    /* z-index: 50; */
  }
  .img08 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .position {
    width: 68%;
     color: #717a8e;
      padding: 20px;
       border-radius: 16px;
        margin: 2rem 0rem;
         text-align: center; 
         border: 1px solid gray;
         background-color: #fff;
  }

  .contact-career {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    /* line-height: '2rem'; */
  }
  .contact-image {
    width: 60px;
    height: 60px;
  }
  .contact-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1075px){
    .container {
      height: 120px;
      padding: 5rem 3rem;
      width: 75%;
    }
    .container h1 {
      font-size: larger;
    }
    .containerhead {
      font-size: 12px;
      line-height: 1.5rem;
      
    }
    .academy {
      /* width: 35%;
      line-height: 0.9rem; */
      /* text-align: center; */
      padding-left: 32%;
      margin-bottom: 40px;
    }
    .academy p {
      line-height: 1.5rem;
      width: 75%;
      text-align: center;

    }
    .learnfree {
      /* height: 90px; */
      margin-top: 60px;
      padding: 2px;
    }
    .circles {
      top: -50px;
      margin-bottom: -50px;
    }
    .img07 {
      height: 160px;
      width: 70%;
    }
    .img08 {
    width: 64%;
    height: 90%;
    /* height: 220px; */
    margin-bottom: 10px;
    
    }
  }

    @media screen and (max-width: 950px){
      .academy p {
      line-height: 1.5rem;
      width: 99%;
      text-align: center;

    }
    .learnfree {
      /* height: 160px;
      width: 75%; */
      height: 100%;
      width: 100%;
    }
      .img07 {
      height: 160px;
      width: 75%;
      
    }
    .img08 {
    width: 62%;
    height: 200px;
    margin-bottom: 10px;
    
    }
    }


  @media screen and (max-width: 790px){
    .interest h1  {
      font-size: 23px;
    }
    .interest2 p {
      width: 120%;
      font-size: 14px;
      margin-bottom: -40px;
    }
    .img08 {
    width: 58%;
    height: 180px;
    margin-bottom: 10px;
    
    }
  }

  @media screen and (max-width: 751px){
    .img07 {
      height: 120px;
      width: 75%;
      
    }
    .purpple {
      width: 60px;
      height: 60px;

    }
    .white {
      width: 30px;
      height: 30px;
    }
    .circles {
      top: -35px;
      padding-left: 84%;
    }
  }


`