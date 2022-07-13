import "./Page1.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link } from "react-scroll";

function Page1() {
  let tl = gsap.timeline()
  const span1 = useRef()
  const span2 = useRef()
  const btn1 = useRef()


useEffect(()=>{
  const left = document.querySelector(".left")
  const right = document.querySelector(".right")
  const btn2 = document.querySelector(".contact")

  tl.to(span1.current, {duration: 1, y:0, delay:1})
  tl.to(span2.current, {duration: 1, y:0})
  tl.from(btn1.current, {duration: 2, x:-400, ease:"power2", delay:7})
  gsap.to(btn1.current, {duration:2.5, ease:"bounce", yoyo:true, yoyoEase:true, delay: 9, repeat:-1})

  gsap.to(left, {duration: 2, y:350, left:50, ease:"power2", delay: 10})
  gsap.to(right, {duration: 2, y:350, right:30,ease:"power2", delay: 10})
  gsap.to(left, {duration:1, keyframes:{ "0%": {y:350}, "50%": {y: 320}, "100%": {y: 350}}, delay: 9, repeat:-1})
  gsap.to(right, {duration:2, keyframes:{ "0%": {y:350}, "50%": {y: 320}, "100%": {y: 350}}, delay: 9, repeat:-1})

  btn2.addEventListener("mouseenter", () => {
    gsap.to(btn2, {scale: 1.1, duration: 1, ease:"power2", repeat:0, border: 4})
  })


  btn2.addEventListener("mouseleave", () => {
    gsap.to(btn2, {scale:1, duration:1, ease:"power2", border: 2})
  })
})

  return (
    <div className="Page1" id="Who-am-I">
      <Link className="left" to="Experience" smooth={true}><span className="lineLeft">Scroll Down <FontAwesomeIcon icon={faArrowDown}/></span></Link>
      <div className="Info">
        <div className="infoSon">
          <span className="name" ref={span1}>
              Hi,
          </span>
        </div>
        <div className="infoSon">
          <span className="name" ref={span2}>
              I'm Celmo,
          </span>
        </div>
          <div className="wrapper">
            <ul className="dynamic-text" >
              <li><span className="name litem one" >Front-End Web Developer.</span></li>
              <li><span className="name litem two">Back-End Web Developer.</span></li>
              <li><span className="name litem three">Freelancer.</span></li>
            </ul>
          </div>
          
          <br />
          <br />
          <Link to="Contact" smooth={true} type="button" className="contact" ref={btn1}>Contact Me</Link>
      </div>
      
      <Link className="right" to="Experience" smooth={true}><span className="lineRight">Scroll Down <FontAwesomeIcon icon={faArrowDown}/></span></Link>
    </div>
  );
}

export default Page1;
