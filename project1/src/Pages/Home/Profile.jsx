import React from 'react'
import styled from 'styled-components'
// import Image1 from '../assets/Homeimage/Image1.jpg'
import Image1 from './Image1.jpg'

function Profile() {
    return (
        <Civ>
            <div className='pro-1'>
                <div className='pro-2' style={{ marginTop: '80px' }}>
                    <h1>
                        Empowering the Future <br />
                        With Inovative Software.
                    </h1>
                    <div style={{ width: '450px', fontSize: '19px', lineHeight: '1.6rem' }} >
                        At TM30 Global Limited, we are more than just a software development firm; we are pioneers, trailblazers, and visionaries. Our team of talented engineers, designers, and strategists are dedicated to crafting bespoke software solutions that align with our clients' unique objectives, empowering them to achieve their goals with utmost efficiency and innovation.
                        <div style={{ marginTop: '8px' }}>
                            <button style={{ background: '#00A9ff', border: 'none', fontSize: '16px', padding: '12px 33px', color: '#fff', borderRadius: '5px' }}>
                                About us
                            </button>
                        </div>
                    </div>

                </div>
                <div className='image-1' >
                    <img src={Image1} alt='' className='img' />
                </div>
            </div>

        </Civ>
    )
}

export default Profile

const Civ = styled.div`
    .pro-1 {
        display: flex;
        justify-content: flex-start;
        padding: 15px 0px 25px 70px;
        gap: 30px;
        background-color: #f9fafb;
        /* background-color:; */
        /* border: 1px solid green; */
    }
    .image-1 {
        width: 750px;
        height: 576px;
        /* border: 1px solid red; */
        
    }
    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h1 {
        font-size: 40px;
        width: 500px;
    }

    @media (max-width: 800px) {
        .pro-1 {
            // width: 100%;
            // display: block;
            // ma
        // justify-content: flex-start;
        // padding: 15px 0px 25px 70px;
        // gap: 30px;
        }
        .pro-2 {
            width: 100%;
        }
        .image-1 {
            width: 100%;
        }
    }
    @media (max-width: 250px) {
        .pro-1 {
            text-align: center;
        }
    }
`