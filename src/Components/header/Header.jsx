import './Header.css'
import { Link } from 'react-scroll';
import {gsap} from "gsap";
import { useEffect, useRef } from "react";

function Header() {
    const headerRef = useRef()
       
    useEffect(()=>{ 
       const sv = document.querySelector(".svg") 
       gsap.from(headerRef.current, {duration: 3, x:-2000, delay: 8})

       sv.addEventListener("mouseenter", () => {
        gsap.to(sv, {scale: 1.2, duration: 1, ease:"power2", repeat:0})
      })
    
    
      sv.addEventListener("mouseleave", () => {
        gsap.to(sv, {scale:1, duration:1, ease:"power2"})
      })
    })

    
    return (

        <div className="hd" ref={headerRef}>
            <header>
                <div className='logo'>
                    <svg height="80px" width="80px" className='svg'>
                        <circle  r={35} cx={40} cy={40} style={{stroke:"#302F30", fill:"none"}} className='c1'/>
                        <circle  r={35} cx={40} cy={40} style={{stroke:"white", fill:"none"}} className='c2'/>
                    </svg>                       
                </div>
                <div className="line"></div>
                <nav>
                        <Link to="Who-am-I" spy={true} smooth={true} offset={-50} duration={900} className="link">Who am I</Link>
                        <Link to="Experience" spy={true} smooth={true} offset={-50} duration={900} className="link">Experience</Link>
                        <Link to="Previous Work" spy={true} smooth={true} offset={-50} duration={900} className="link">Previous Work</Link>
                        <Link to="Contact" spy={true} smooth={true} offset={-50} duration={900} className="link">Contact</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header
