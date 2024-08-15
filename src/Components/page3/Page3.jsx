import "./Page3.css";
import cb1 from "../../imgs/pj_img/cbank/cbank1.png";
import ca1 from "../../imgs/pj_img/chat app/1.png";
import ct1 from "../../imgs/pj_img/Covid_19_Tracker/cv1.png";
import gmc1 from "../../imgs/pj_img/Gmail clone/1.png";
import ldc1 from "../../imgs/pj_img/linkedin clone/1.png";
import nfc1 from "../../imgs/pj_img/netflix clone/1.png";
import ra1 from "../../imgs/pj_img/real estate/1.png";
import ta1 from "../../imgs/pj_img/travel agency/1.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

function Page3() {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])

  return (
    <div className="Page3" id="Previous Work">
      <h2 className="section__title" data-aos="fade-right">Previous Work</h2>
      <br/>
      <div className="discover__container" data-aos="fade-left">
          {/* <!-- discover 1 --> */}
          <a href="https://cbank1.vercel.app/">
          <div className="discover__card">
            <img src={cb1} alt="" className="discover__img"/>
              <div className="discover__data">
                <h2 className="discover__title">Virtual banking mockup website </h2>
              </div>
          </div>
          </a>
          

          {/* <!-- discover 2 --> */}
          <a href="https://github.com/mosse692/chat-app-client.git">
          <div className="discover__card">
            <img src={ca1} alt="" className="discover__img"/>
              <div className="discover__data">
                <h2 className="discover__title">Chat app</h2>
              </div>
          </div>
          </a>
          

          {/* <!-- discover 3 --> */}
          <a href="https://github.com/mosse692/covit-19-tracker.git">
          <div className="discover__card">
            <img src={ct1} alt="" className="discover__img"/>
              <div className="discover__data">
                <h2 className="discover__title">covid data track</h2>
              </div>
          </div>
          </a>
          

          {/* <!-- discover 4 --> */}
          <a href="https://github.com/mosse692/Gmail-clone.git">
          <div className="discover__card">
            <img src={gmc1} alt="" className="discover__img"/>
              <div className="discover__data">
                <h2 className="discover__title">Gmail clone</h2>
              </div>
          </div>
          </a>
          

          {/* <!-- discover 5 --> */}
          <a href="https://github.com/mosse692/linkedin-clone.git">
          <div className="discover__card">
            <img src={ldc1} alt="" className="discover__img"/>
              <div className="discover__data">
                <h2 className="discover__title">Linkedin clone</h2>
              </div>
          </div>
          </a>
          

          {/* <!-- discover 6 --> */}
          <a href="https://github.com/mosse692/netflix-clone.git">
          <div className="discover__card">
            <img src={nfc1} alt="" className="discover__img"/>
              <div className="discover__data">
                <h2 className="discover__title">Netflix clone</h2>
              </div>
          </div>
          </a>
          
          
          {/* <!-- discover 7 --> */}
          <a href="https://github.com/mosse692/real-estate-app.git">
          <div className="discover__card">
            <img src={ra1} alt="" className="discover__img"/>
              <div className="discover__data">
                <h2 className="discover__title">Real estate website</h2>
              </div>
          </div>
          </a>
          

          {/* <!-- discover 8 --> */}
          <a href="https://github.com/mosse692/travel-agency.git">
          <div className="discover__card">
            <img src={ta1} alt="" className="discover__img"/>
              <div className="discover__data">
                <h2 className="discover__title">Travel agency website</h2>
              </div>
          </div>
          </a>
          
      </div>
    </div>
  );
}

export default Page3;
