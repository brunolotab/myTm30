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
                <div style={{ width: '100%' }}>
                    <video loop autoPlay muted className='bg-video'>
                        <source src={(Main1)} type='video/mp4' />
                    </video>
                </div>

                <div className='content'>
                    <div >
                        <h1 className='contenthead' style={{
                            textAlign: 'center', fontWeight: 'border',
                            fontSize: '80px', lineHeight: '5.8rem', color: 'white', position: 'relative',
                            top: '-100px'
                        }}>Pioneering innovation in
                            <br />Software Solutions.

                        </h1>
                    </div>
                    <div style={{ position: 'relative', top: '-120px' }}>
                        <div>
                            <p style={{ textAlign: 'center', color: '#fff' }}>
                                <span style={{ fontWeight: 'bold' }}>Tm30 Global Limited ,</span> a leading software solution company<br />
                                at the forefont of revolutionizing industries through<br />
                                cutting-edge technologies and inovative software<br />
                                development.
                            </p>
                        </div>
                        <div className='btn' style={{ textAlign: 'center' }}>
                            <button style={{
                                padding: '15px', background: '#00A3F6',
                                borderRadius: '6px', border: 'none', fontSize: '18px', color: '#fff'
                            }} onClick={() => setOpenModal(true)}>Request a demo</button>
                        </div>
                    </div>
                </div>

                {/* <h1 style={{position:'absolute',top:'20%',left:'20%',zIndex:'999'}}>lotanna</h1> */}

                <div className='backtrust'>
                    <div className='backtrust1'><p style={{ width: '190px' }}>Trusted partners </p><p>worldwide</p></div>
                    <div style={{ padding: '0px 98px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '850px' }}>
                        <Slide />
                    </div>
                </div>

                {openModal && <ModalRequest closeModal={setOpenModal} />}
                <Profile />
                <div style={{ background: '#fff' }}><BodyGrid /></div>
                <div style={{background:'#f9fbfa', padding:'7rem 5rem 5rem 5rem'}}>
                    <div style={{color:'#24b0ff', fontSize:'19px'}}>Our Unique Solutions include</div><br/>
                    <h1>Agency Banking solution</h1><br/>
                    <div style={{lineHeight:'0.5'}}><p>TM30 Agency Banking Solution empowers you to effectively drive financial inclusion, scale customers acquisition and increase</p>
                    <p>profitability.</p></div><br/>
                    <div style={{lineHeight:'0.5'}}><p>We have designed our solution with the success of your business in mind, the platform enables you take advantage of current</p>
                    <p>and future financial services opportunities.</p></div><br/>
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
  overflow: hidden;
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
    .bg-video {
        width: 100%;
        height: 640px;
        object-fit: cover;
        
    }

    @media screen and (max-width: 800px){
        margin: 0px;
            /* padding: 0px; */
        .main {
            width: 100%;
            /* padding: 18px; */
            
            
        }
        // .content {
        //     width: 100%;
        // }
         .contenthead {
            font-size : 10px ;
            color: red; 
        }
        .backtrust {
            width: 100%;
            position: relative;
        }
        .btn {
            width: 100%;
            position: absolute;
        }
    }
    @media(max-width: 250px){

    }
    @media(max-width: 250px) {
        .main{
            width: 250px;
            display: block;
            
            
        }
        .bg-video {
            width: 90%;
            height: 50%;

        }

    }
`