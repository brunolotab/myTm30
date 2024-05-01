
import React from 'react'
// import Afolabi from '../../assets/Aboutimage/Directors/Dimage1_files/albert-eca16837.png'


import styled from 'styled-components'


function AfolabiAlb({ closemodal, name, propics, description, description2, description3}) {
    return (
        <Aiv>
            <div className='Afol-wrapper'>
                <div className="Afol-container">
                    <div className='Afolabi-description'>
                        <p>
                        <span style={{fontWeight:'bolder',color:'#000'}}>{name}</span>{description}
                        </p>
                        <p>
                        {description2}
                        </p>
                        <p>
                        {description3}
                        
                        </p>
                        
                    </div>
                    <div className='Afolabi-image'>
                        <div><img src={propics} alt='' /></div>
                        <span onClick={() => closemodal(false)} style={{fontWeight:'700', cursor:'pointer'}}>X</span>
                        
                    </div>
                </div>
            </div>

        </Aiv>
    )
}

export default AfolabiAlb

const Aiv = styled.div`
.Afol-wrapper {
    position: fixed;
    top: 0%;
    left: 0%;
    /* background-color: rgba(0,0,0,0.3); */
    /* background-color: #7e7e7f ; */
    background-color: rgba(126,126,127,0.9);  
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.Afol-container {
    display: flex;
    justify-content:center ;
     width: 70%;
    max-height: 260px;
    
    /* z-index: 2000; */
    align-items: center;
    border: 1px solid #ffff;
    border-radius: 8px;
    /* position: absolute; */
    /* top: 8rem; */
    padding: 4rem;
    gap: 80px;
    /* align-items: center; */
    background-color: #ffff;

}
.Afolabi-description {
    /* display: flex; */
    width: 800px;
    height: 200px ;
    overflow: auto;
    line-height: 2.9rem;
    /* color: #717a8e; */
    color: #7f7f7f;
    font-size: 18px;


}
.Afolabi-image {
    /* width: 750px; */
    display: flex;
    justify-content: center;
}
.Afolabi-image div {
    width: 300px;
    height: 380px;
}
.Afolabi-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    scale: 0.9;
}
/* p:nth-child(1) ::before{
    content: " Agada Apochi " ;
    font-weight: 700;
    color: #000;
} */
`