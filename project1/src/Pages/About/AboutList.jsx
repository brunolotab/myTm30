import React from 'react'
import styled from 'styled-components'
import Aimage1 from '../../assets/Aboutimage/Aimage1.svg'
import Aimage2 from '../../assets/Aboutimage/Aimage2.svg'
import Aimage3 from '../../assets/Aboutimage/Aimage3.svg'
import Aimage4 from '../../assets/Aboutimage/Aimage4.svg'
import Aimage5 from '../../assets/Aboutimage/Aimage5.svg'
import Aimage6 from '../../assets/Aboutimage/Aimage6.svg'

function AboutList() {
    return (
        <Aiv>
            <div>
                <div className='gridwrapper'>
                    <div className='image-wrap'>
                        <div className='Aimage'><img src= {Aimage1} alt=''/></div>
                        <h3>Solutions</h3>
                        <div>
                        We develop solutions for your business everyday needs
                        </div>
                    </div>
                    <div className='image-wrap'>
                        <div className='Aimage'><img src= {Aimage2} alt=''/></div>
                        <h3>Possibilities</h3>
                        <div>
                        Difficulty does not exist in our reality.
                        </div>
                    </div>
                    <div className='image-wrap'>
                        <div className='Aimage'><img src= {Aimage3} alt=''/></div>
                         <h3>Do the impossible</h3>
                        <div>
                        Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"
                        </div>
                    </div>
                    <div className='image-wrap'>
                    <div className='Aimage'><img src= {Aimage4} alt=''/></div>
                        
                        <h3>Creativity</h3>
                        <div>
                        We are continually drawing out the best arrangements in the best innovative manner.
                        </div>
                    </div>
                    <div className='image-wrap'>
                    <div className='Aimage'><img src= {Aimage5} alt=''/></div>

                        <h3>Excellence</h3>
                        <div>
                        We do not settle for less. Excellence is our norm.
                        </div>
                    </div>
                    <div className='image-wrap'>
                    <div className='Aimage'><img src= {Aimage6} alt=''/></div>

                        <h3>Innovation</h3>
                        <div>
                        We are continually drawing out the best arrangements in the best innovative manner.
                        </div>
                    </div>

                </div>
            </div>

        </Aiv>
    )
}

export default AboutList

const Aiv = styled.div `
     .gridwrapper {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 40px;
    scale: 0.85;
    line-height: 1.8rem;
    font-size: 20px;
    text-align: center;
    color: #717a8e;
    /* border: 1px solid green; */
  }
  h3 {
    color:#000;
  }
  .image-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px;
    line-height: 1.5rem;
  }
  .Aimage {
    width: 40px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

@media screen and (max-width: 586px){
    .gridwrapper {
        display: block;
    }
    h3 {
        font-size: 16px;
    }
    div {
        font-size: 15px;
    }
}

`