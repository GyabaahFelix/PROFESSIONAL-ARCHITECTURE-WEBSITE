import React, { useState ,useEffect} from 'react'
import "./Navbar.css"
import { navTabs } from '../../data'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'
import Logo from '../Logo'
import gsap from 'gsap'

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const [Visible, setVisible] = useState(false);
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > 145){
      return setVisible(true);
    }
    setVisible(false);
  };
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[])

  useEffect(()=>{
    if(Visible){
      gsap.fromTo(
        ".navbar",
        {y:-250},
        {y:0,top:0}
      )
    }
  },[Visible])

  return (
    <nav className={`navbar ${Visible ? 'Visible': ''}`}>
      {open ? (<div className='sidebar__overlay' onClick={()=>setOpen(!open)}></div>):""}
      <Logo/>
      <div className={`box nav__tabs ${open ? 'open':''}`}>
        <div 
        className="icon__container cancel__btn"
        onClick={()=>setOpen(!open)}
        >
          <FaTimes/>
        </div>
        {
          navTabs.map((tab,index)=>(
            <Link
            to={tab.id}
            className='tab'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-70}
            onClick={()=>setOpen(false)}
            key={index}
            >
              <p>{tab.name}</p>
            </Link>
          ))
        }
      </div>
      <div className="box buttons">
        <Link to='contact' className='btn contact__btn'>Contact Us</Link>
        <div 
        className="icon__container menu__btn"
        onClick={()=>setOpen(!open)}
        >
          <RiMenu3Fill/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar