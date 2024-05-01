import React from 'react'
import styled from 'styled-components'
import { SolutionLists } from './SolutionLists'

function Solutions() {

    const ourSolutions = SolutionLists;

    return (
        <Siv>
            <div className='solution-wrapper'>
                <div className="wrapper">
                    <div className='container'>
                        <h2>
                            Solutions.
                        </h2>
                        <div>
                            Take a look at our solutions.
                        </div>
                    </div>

                </div>
                <div>
                <div style={{textAlign:'center',margin:'40px 0px 80px 0px', color:'#000'}}><h1>Our Solutions</h1></div>
                <div  className='flexsolution'>
                            {
                                ourSolutions.map((item, i) => 
                                    (<div key={i} className='oursolution'>
                                        <div><h1 className='op-1' style={{color:'#000', lineHeight:'2.4rem'}}>{item.title}</h1>
                                        <div className='op-1'>{item.description}</div><div style={{ margin: '8px 25px' }}><button>View new project</button></div>
                                        </div>
                                        <div className='op-2'><img src={item.image} /></div>
                                    </div>)                                    
                                )
                            }
                        </div>
                
                </div>
            </div>

        </Siv>
    )
}

export default Solutions

const Siv = styled.div`

width: 100%;
  .solution-wrapper {
    padding: 2rem 3rem;
    background-color: #fff;
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
    width: 80%;
    height: 250px;
    line-height: 2.5rem;
    color: #fff;
    font-size: 19px;
  }
  .flexsolution {
    /* display: flex;
    justify-content: flex-start; */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 450px;
    padding: 1rem ;
    grid-gap: 130px;

  }
  .oursolution:nth-child(even) {
    /* background-color: red; */
    display: flex;
    flex-direction: row-reverse;
    justify-content: center ;
    /* justify-content: space-around ; */
    align-items: center; 
    /* margin-left: -40px; */
    /* margin: 20px -50px 20px 0px; */
    gap: 110px;

  }
  
  h3 {
    color: #000;
  }
  .oursolution {
    display: flex;
    justify-content: space-between;
    align-items: center; 
    
  }
  .op-1 {
    width: 320px;
    line-height: 1.6;
    padding-left: 30px;
  }
  .op-2 {
    width: 750px;
    height: 100%;
 };
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    background: #00A9ff;
     border: none;
      font-Size: 16px;
       padding: 12px 23px;
        color: #fff;
         border-Radius: 5px;
  }
`
