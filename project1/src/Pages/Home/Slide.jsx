import React from 'react'
import Himage1 from '../../assets/Homeimage/Himage1.png'
import Himage2 from '../../assets/Homeimage/Himage2.png'
import Himage3 from '../../assets/Homeimage/Himage3.png'
import Himage4 from '../../assets/Homeimage/Himage4.png'
import Himage5 from '../../assets/Homeimage/Himage5.png'
import styled from 'styled-components'

function Slide() {
  return (
    <Siv>
        <div className='slider'>
            <div className='slide-track'>
                <div className="slide">
                    <img src={Himage1} />
                </div>
                <div className="slide">
                    <img src={Himage2} />
                </div>
                <div className="slide">
                    <img src={Himage3} />
                </div>
                <div className="slide">
                    <img src={Himage4} />
                </div>
                <div className="slide">
                    <img src={Himage5} />
                </div>
                
                
            </div>

        </div>
    </Siv>
  )
}

export default Slide

const Siv = styled.div `
    .slider {
        height: 50px;
        margin: auto;
        overflow: hidden;
        position: relative;
       width: 80%;
        /* padding: 2px; */
    }
    .slider .slide-track {
        -webkit-animation: Scroll 30s linear infinite;
        animation: Scroll 30s linear infinte;
        display: flex;
        width: calc (250 * 14);
        /* border: 1px solid green; */
    }
    .slider .slide {
        /* height: 60px; */
        width: 250px;
    }
    .slider .slide img {
        width: 80%;
        height: 40px;
        /* border-radius: 10px; */
        /* border: 2px solid #abbbba; */
    }
    /* @keyframes Scroll {
        0% {transform: translateX(0)};
        100% {transform: translateX(calc(-250px *7))}
    } */
    @keyframes Scroll {
    0% {
        transform: translateX(100%)
    }
    100% {
        transform: translateX(-100%)
    }
    } 

    /* @media screen and (max-width:1075px){ */
    @media screen and (max-width:1200px){

        html,body{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
        .slider {
            /* width: 90%; */
            /* margin-left: 30px; */
            /* padding-right: 30px; */
            width: 58%;
            left: -20px;
        }
    }
    /* @media (min-width: 851px) and (max-width:1040px){
        .slider {
            
            width: 50%;
        }
    } */
     /* @media screen and  (max-width: 1150px) and (min-width: 751px){ */
     @media screen and  (max-width: 995px) {
        html,body{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
        .slider {
            
            width: 53%;
            left: -10px;
        }
    } 
     /* @media screen and  (max-width: 750px) and (min-width: 500px){ */
     @media screen and  (max-width: 768px) and (min-width: 500px){
        html,body{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
        .slider {
            
            width: 30%;
            left: -70px;
        }
    } 
`

