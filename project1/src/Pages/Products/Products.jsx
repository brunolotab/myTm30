import React from 'react'
import { Productitems } from './Productitems'
import styled from 'styled-components';
import Reusable1 from '../../Reuseable/Reusable1';
// import Pimage6 from './Productsimage/Pimage.gif'


function Products() {

  const ourProducts = Productitems;

  return (
    <Civ>
      <div className='product-wrapper'>
        <div className="wrapper">
          <div className='container'>
            <h2>
              Product
            </h2>
            <div>
              Take a look at our past products.
            </div>
          </div>

        </div>
        <div className='em-bk'>We believe work is more than a desk or a to-do list.
          We believe work should empower a <div>better life. We’re:</div></div>

        <div>
          <Reusable1 />
          {/* <section>
                        <div className='section-container'>
                        <div  className='image'><img src={('../Pimage6.gif')} alt='' /></div>
                            <h3>Inspired by people</h3>
                            <p>
                                People are the focal point of everything we do. Our daily task is to deliver transaction solutions
                                that empower modern businesses and people to thrive.
                            </p>
                        </div>
                   
                        <div className='section-container'>
                        <div  className='image'><img src={('./Pimage7.gif')} alt='' /></div>
                            <h3>Driven by Values </h3>
                            <p>
                                Values drive our decisions and actions. Everyone is a stakeholder;
                                we do what it takes to get it right the first time and all the time.
                            </p>
                        </div>
                                    
                        <div className='section-container'>
                        <div  className='image'><img src={('./Pimage8.gif')} alt='' /></div>
                            <h3>Focused on Scaling</h3>
                            <p>
                                Regardless of how large we scale, we retain the agility of a startup and remain focused on
                                creating the best solutions possible for our clients.
                            </p>
                        </div>
                    </section> */}
        </div>
        <div>
          <div style={{ textAlign: 'center', marginTop: '60px', color: '#000' }}><h1>Our Products</h1></div>
          {/* <section> */}
          <div className='flexproduct'>
            {
              ourProducts.map((item, i) =>
              (<div key={i} className='ourproduct'>
                {/* <div>{item.id}</div> */}
                <div><h1 className='op-1' style={{ color: '#000' }}>{item.title}</h1>
                  <div className='op-1'>{item.description}</div><div style={{ margin: '8px 25px' }}><button>View new project</button></div>
                </div>
                <div className='op-2'><img src={item.image} /></div>
              </div>)
              )
            }
          </div>

        </div>

      </div>

    </Civ>
  )
}

export default Products

const Civ = styled.div`
width: 100%;
  .product-wrapper {
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
  /* @keyframes sol {
    0% {
        transform: translateX(100%)
    }
    100% {
        transform: translateX(-100%)
    } 
  } */
  .em-bk {
    padding: 3rem;
    text-align: center;
    line-height: 1.5rem;
    margin-top: 2rem;
  }
 

  .flexproduct {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 450px;
    padding: 1rem;
    grid-gap: 130px;
    
  }

  .ourproduct:nth-child(even) {
    /* background-color: red; */
    display: flex;
    flex-direction: row-reverse;
    justify-content: center ;
    /* justify-content: space-around ; */
    align-items: center; 
    /* margin-left: -40px; */
    /* margin: 20px -50px 20px 0px; */
    gap: 120px;

  }
  
  h3 {
    color: #000;
  }
  .ourproduct {
    display: flex;
    justify-content: space-between;
    align-items: center; 
  }
  .op-1 {
    width: 320px;//change the width
    line-height: 1.6rem;
    padding-left: 30px;
  }
  .op-2 {
    width: 700px;
    height: 100%;
    
  };
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* .image {
    width: 80px;
    height: 80px;
    margin-left: 20px;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
  button {
    background: #00A9ff;
     border: none;
      font-Size: 16px;
       padding: 12px 23px;
        color: #fff;
         border-Radius: 5px;
  }
  
`