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
                    <div className='menu-button' onClick={showsidebar}><BiMenu style={{fontSize:'26px', color:'#66d5f3'}}/></div>
                </div>
                <div className='sidebar'>
                        <div onClick={hidesidebar} style={{fontSize:'26px'}}>X</div>
                        <NavLink to = {'/'} onClick={hidesidebar} ><div>Home</div></NavLink>
                        <NavLink to = {'/Solutions'} onClick={hidesidebar} ><div>Our Solution</div></NavLink>
                        <NavLink to = {'/Products'} onClick={hidesidebar} ><div>Products</div></NavLink>
                        <NavLink to = {'/Projects'} onClick={hidesidebar} ><div>Projects</div></NavLink>
                        <NavLink to = {'/Careers'} onClick={hidesidebar} ><div>Careers</div></NavLink>
                        <NavLink to = {'/About'} onClick={hidesidebar} ><div>About</div></NavLink>
                        <NavLink to ={'/Contact'} onClick={hidesidebar} ><div className='contact' >Contact</div></NavLink>
                
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
    width: 90%;
    
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
  width: 400px;
  z-index: 999;
  background-color: #fff;
  backdrop-filter: blur(10px);
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 3rem;
  /* padding-left: 10px; */
  

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
@media(max-width: 1200px){
    .main{
        font-size: 16px;
    
    }
    .detail {
        font-size: 16px;
    }
   
}

@media screen and (max-width: 1050px){
  .hideonmobile {
    display: none;
  }
  .menu-button {
    display: block;
  } 
  .sidebar {
    display: block;
    /* height: 100vh; */
    height: 100%;
    
    
  }
} 
/* @media screen and (max-width: 998px) {
    .sidebar{
        height: 100vh;
        height: 100%;
    }
} */

@media screen and (max-width: 600px){
  .sidebar link {
    height: 100vh;
   /* display: block; */
   /* display: none;  */
   /* width: 100%; */
   text-align: left;
   font-size: 27px;
   /* font-weight: 200; */
   color: #000;
   height: 100%;
   line-height: 4.6rem;
   color:  red;
   /* padding-left: 2rem; */
   
   
  }
 
}



`