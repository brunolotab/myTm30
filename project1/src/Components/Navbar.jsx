import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/NavLogo/Logo.png'
import { BiMenu } from 'react-icons/bi'


function Navbar() {

    const showsidebar = ()=> {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'block'
    }
    const hidesidebar = ()=> {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none'
    }

    return (
        <Piv>
            <section>
                
                <div className='logo'><img src={Logo} alt=''/></div>
                   
                    <div className='main'>
                        <NavLink to = {'/'}><div className='hideonmobile'>Home</div></NavLink>
                        <NavLink to = {'/Solutions'}><div className='hideonmobile'>Our Solution</div></NavLink>
                        <NavLink to = {'/Products'}><div className='hideonmobile' >Products</div></NavLink>
                        <NavLink to = {'/Projects'}><div className='hideonmobile' >Projects</div></NavLink>
                        <NavLink to = {'/Careers'}><div className='hideonmobile' >Careers</div></NavLink>
                    </div>
                
                <div className='detail'>
                    <NavLink to = {'/About'}><div className='hideonmobile' >About</div></NavLink>
                    <NavLink to ={'/Contact'}><div className='hideonmobile'> <div className='contact'>Contact</div></div></NavLink>
                    <div className='menu-button' onClick={showsidebar}><BiMenu style={{fontSize:'26px'}}/></div>
                </div>
                <div className='sidebar'>
                        <div onClick={hidesidebar} style={{fontSize:'26px'}}>X</div>
                        <NavLink to = {'/'} ><div>Home</div></NavLink>
                        <NavLink to = {'/Solutions'}><div>Our Solution</div></NavLink>
                        <NavLink to = {'/Products'}><div>Products</div></NavLink>
                        <NavLink to = {'/Projects'}><div>Projects</div></NavLink>
                        <NavLink to = {'/Careers'}><div>Careers</div></NavLink>
                        <NavLink to = {'/About'}><div>About</div></NavLink>
                        <NavLink to ={'/Contact'}><div className='contact' >Contact</div></NavLink>
                
                    </div>
            </section>
        </Piv>
    )
}

export default Navbar

const Piv = styled.div`
section{
    display: flex;
    justify-content: space-between;
    padding: 1px 64px;
    /* border-bottom: 1px solid #ccc; */
    box-shadow: 0px 4px 10px #eee;
    background-color: #fff;
    color: #000;
    align-items:center;
    font-size: 18px;
    
}
.logo {
    width: 50px;
    
}
.logo img {
    width: 100%;
    object-fit: cover;
}

div {
    padding: 10px;
}
.main{
    /* position: relative; */
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    text-decoration: none;  
}
/* .main div {
    padding: 10px;
} */
.main div:hover {
    color: #66d5f3;
}
.detail {
    display: flex;
    justify-content: space-between;
    align-items: center ;
    gap: 2rem;
    

}
.detail div:hover {
    color: #66d5f3;
}
a {
    text-decoration: none;
    color: black;
}
a.active {
    /* background: blue; */
    color: #66d5f3;
    /* outline: none; */
    text-decoration: none;
}


.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  z-index: 999;
  background-color: #fff;
  backdrop-filter: blur(10px);
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 3rem;

}
.menu-button {
    display: none;
}
.sidebar div:hover {
  width: 100%;
  background-color: #ddd;
  
}

.contact {
    padding: 1rem 2rem; 
    border-radius: 10px;
    color:#fff;
     background:#00a9ff;
}
@media(max-width: 1080px){
    .main{
        font-size: 16px;
    
    }
    .detail {
        font-size: 16px;
    }
}

@media(max-width: 1075px){
  .hideonmobile {
    display: none;
  }
  .menu-button {
    display: block;
  } 
  .sidebar {
    display: block;
    
  }
} 
/* @media (min-width: 801px){
    .sidebar {
    display: none;
    
  }
} */
@media(max-width: 600px){
  .sidebar {
    /* width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center; */
   display: block;
   width: 100%;
   text-align: center;
   font-size: 27px;
   font-weight: 700;
   color: #000;
  }
}

`