import React from 'react'
import styled from 'styled-components'

function BodyGrid() {
  return (
    <Ziv>
        <div className='gridcontainer'>
            
            <div className='gridcontainer-1'>
                <h1 style={{color:'#31b4ff', textTransform:'capitalize'}}>leaverage our cutting-edge technology </h1>
                <div><p>TM30 leverages  state-of-the art technologies to deliver  supiror solutions that wide
                    range of <div>industries: Fininace institition, Telecommunications, Enterprises, Retail, Energy 
                     and Utility,</div> Education, Government and Public Sectors</p></div>
            </div>
            
            <div className='gridwrapper'>
                <div>
                    <h3>Couston Software Development</h3>
                    <div>
                    We help to create tailored software solutions that addresses specific/various business requirements. We develop custom applications, software products, and platforms from scratch, ensuring a perfect fit for our client's unique needs.
                    </div>
                </div>
                <div>
                    <h3>User centric Design</h3>
                    <div>
                    We focus on creating intuitive and user-friendly interfaces that enhances the user’s experience. We employ user-centric design principles to develop software that is visually appealing, easy to navigate, and optimized for usability.
                    </div>
                </div>
                <div>
                    <h3>Agile Development Methology</h3>
                    <div>
                    We embrace agile development approach that allows us to deliver solutions quickly and efficiently. Our approach enables iterative development, frequent communication with clients, and adaptability to changing requirements, ensuring a high degree of client satisfaction.
                    </div>
                </div>
                <div>
                    <h3>Scalability and Felxibility</h3>
                    <div>
                    We design systems with scalability in mind, ensuring that they can grow alongside the business and handle increased workloads since scaling and adapting sytems is crucial for businesses in a dynamic environment
                    </div>
                </div>
                <div>
                    <h3>Security and Data Privacy</h3>
                    <div>
                    With the increasing threats to digital security, We as a software solution company places great importance on implementing robust security measures.
                    </div>
                </div>
                <div>
                    <h3>Emerging Technogy and Innovation</h3>
                    <div>
                    To stay ahead in the ever-evolving technological landscape we keep our finger on the pulse of emerging technologies. We invest in research and development, and apply innovative solutions to drive digital transformation for our clients.
                    </div>
                </div>
               
            </div>
        </div>
    </Ziv>
  )
}

export default BodyGrid

const Ziv = styled.div `
  .gridcontainer {
    /* padding: 2rem; */
    width: 100%;
    font-size: 20px;
    /* border: 1px solid red; */
  }  
  .gridcontainer-1 {
    text-align: center;
    padding: 0.8rem;
    width: 100%;

  }
  .gridcontainer-1 p {
    color: #717a8e;
  }

  .gridwrapper {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 30px;
    scale: 0.85;
    line-height: 1.8rem;
    font-size: 20px;
    text-align: center;
    color: #717a8e;
    /* border: 1px solid green; */
  }
  h3 {
    color: #000;
  }

  @media (max-width:800px){
    .gridwrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(max-width: 250px){
    .gridwrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`