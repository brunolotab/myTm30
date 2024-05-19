import React, { useState } from 'react'
import styled from 'styled-components'
// import Main1 from '../assets/Homeimage/Main1.mp4'
// import Main1 from '../assets/Homeimage/Main1.mp4'
import Main1 from './Main1.mp4'
import ModalRequest from '../../Modal/ModalRequest'
import Profile from './Profile'
import BodyGrid from './BodyGrid'
import Slide from './Slide'

function Home() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <Div  >
            <div className='main' >
                <div style={{ maxwidth: '100%' }}>
                    <video loop autoPlay muted className='bg-video'>
                        <source src={(Main1)} type='video/mp4' />
                    </video>
                </div>

                <div className='content'>
                    <div >
                        <h1 className='contenthead'>
                            Pioneering innovation in
                            <br />
                            Software Solutions.

                        </h1>
                    </div>
                    <div className='subcontent'>
                        {/* <div className='subcontent2'> */}
                            <p className='subcontent3'>
                                <span style={{ fontWeight: 'bold' }}>Tm30 Global Limited ,</span> a leading software solution company<br />
                                at the forefont of revolutionizing industries through<br />
                                cutting-edge technologies and inovative software<br />
                                development.
                            </p>
                        {/* </div> */}
                        <div className='btn' style={{ textAlign: 'center' }}>
                            <button style={{
                                padding: '15px', background: '#00A3F6',
                                borderRadius: '6px', border: 'none', fontSize: '18px', color: '#fff'
                            }} onClick={() => setOpenModal(true)}>Request a demo</button>
                        </div>
                    </div>
                </div>
            </div>
            
                {/* <h1 style={{position:'absolute',top:'20%',left:'20%',zIndex:'999'}}>lotanna</h1> */}
            <div style={{backgroundColor:'#f9fafb'}}>
           
            <div className='backtrust'>
                    <div className='backtrust1'><p style={{ width: '190px' }}>Trusted partners </p><p>worldwide</p></div>
                    <div className='backtruststyle'>
                        <Slide />
                    </div>
                </div>          

                {openModal && <ModalRequest closeModal={setOpenModal} />}
                <Profile />
            </div>
            <div>
                <div style={{ background: '#fff' }}><BodyGrid /></div>
                <div style={{background:'#f9fbfa', padding:'7rem 5rem 5rem 5rem'}}>
                    <div style={{color:'#24b0ff', fontSize:'19px'}}>Our Unique Solutions include</div><br/>
                    <h1>Agency Banking solution</h1><br/>
                    <div style={{lineHeight:'1.5rem',width:'80%'}}><p>TM30 Agency Banking Solution empowers you to effectively drive financial inclusion, scale customers acquisition and increase
                    profitability.</p></div><br/>
                    <div style={{lineHeight:'1.5rem',width:'80%'}}><p>We have designed our solution with the success of your business in mind, the platform enables you take advantage of current
                    and future financial services opportunities.</p></div><br/>
                    <div >
                            <button style={{
                                padding: '15px', background: '#00A3F6',
                                borderRadius: '6px', border: 'none', fontSize: '18px', color: '#fff'
                            }} onClick={() => setOpenModal(true)}>Learn more</button>
                        </div>

                </div>
            </div>



        </Div>
    )
}

export default Home

const Div = styled.div`
.main {
    width: 100%; 
   /* overflow: hidden;  */
     margin: 0;
     padding: 0;
}
    .content {
        position: absolute;
        width: 100%;
        /* height: 450px; */
        top: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        line-height: 3.1rem;
        padding:  2rem;
        color: black;
        z-index: 99;
        /* z-index: 200999; */
        /* left: 25%; */
        
    }
    .contenthead {
        text-align: center;
         font-weight: border;
        font-size: 80px;
         line-height: 5.8rem;
          color: white;
           position: relative;
            top: -100px;
            
    }
    .subcontent {
        position: relative; 
         top: -120px;
    }
    .subcontent3 {
        text-align: center;
         color: #fff;
    }
    .backtrust {
        position: relative;
        top: -50px;
        /* left: 100px; */
        display: flex;
        justify-content:start ;
        align-items: center;
        padding: 1rem;
        background-color: #ddd;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        margin: 0px 30px;
        /* gap: 40px; */
        border: 1px solid yellow;
        max-width: 91%; 
        
    }
    .backtrust1 {
        /* width: 980px; */
        border-right: 1px solid blue;
        padding: 1px ;
        font-size: 17px;
        /* padding-left: 300px; */
        /* border: 1px solid red; */
        /* margin-left: -385px; */
        
    }
    .backtruststyle {
        padding: 0px 98px ;
         display: flex ;
          justify-content: center;
           align-items: center;
            max-width: 70%;
            /* border: 1px solid red; */
    }
    .bg-video {
        width: 100%;
        height: 640px;
        object-fit: cover;
        
    }

    @media screen and (max-width: 1075px) {
            html,body{
            /* width: 100%;
            height: 100%;
            margin: 0;
            padding: 0; */
            /* overflow-x: hidden; */
        }
        /* .backtrust{
            width: 100%;
        } */
        .backtruststyle {
            margin-right: 0;
            width: 60%;

        }
    }

    @media screen and (max-width: 1033px){
        /* .main {
            width: 100%; 
            overflow: hidden;
        }  */
        .content {
            width: 100%;
         }  
         .contenthead {
            font-size : 3.8rem ;
            /* color: red;  */
            line-height: 3.5rem;
            padding-top: 12px;
            font-weight: 900;
            text-align: justify;
            display: block;
        }
        .subcontent {
            display: block;
        }
       
        .backtruststyle {
            width: 55%;
            /* width: 360px; */
            
        }
       
    }

  
    @media screen and (max-width: 805px){
        .contenthead {
            margin-top: 90px;
            font-weight: 900;
            font-size: 3rem;
            text-align: center;

        }
        .subcontent3 {
            
            font-size: 22px;
            line-height: 3rem;
        }
        .backtrust{
            height: 80%;
        }
        .backtrust1{
            width: 140px;
        }
        
    }

    @media screen and (max-width: 685px) {
        .contenthead{
            font-size: 2.8rem;
        }
        .subcontent3 {
            font-size: 20px;
            line-height: 2.7rem;
            color: red;
        }
    }

    @media screen and (max-width: 600px) {
        .main{
            width: 100%;
            display: block;
            
            
        }
        .content {
            /* display: relative; */
            height: 100%;
            /* font-size: 1rem; */
        }
        .contenthead {
            margin-top: 90px;
            font-size: 2rem;
            line-height: normal;

        }
        .subcontent3 {
            font-size: 18px;
            line-height: normal;
           

        }
        .bg-video {
            width: 100%;
            height: 450px;

        }
        .subcontent {
            display: block;
        }
        /* .backtrust {
            position: relative;
            top: 200px;
            margin-bottom: 60px;
        } */

    }

    
`