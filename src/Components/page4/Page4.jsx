import "./Page4.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

function Page4() {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])

  return (
    <div className="Page4" id="Contact">
      <div className="image1">
        <div className="title" data-aos="fade-right">
          <h1>Get in touch</h1>
        </div>
        <div className="phone_number" data-aos="fade-right">
          <div>
            <FontAwesomeIcon icon={faPhone} size="5x" />
            <p>Talk to me over the phone</p>
          </div>

          <h1>Contact:</h1>
          <p>+27812832113</p>
        </div>
        <div className="email_address" data-aos="fade-left">
          <div>
            <FontAwesomeIcon icon={faMailBulk} size="5x" />
            <p>Send me an Email</p>
          </div>

          <h1>Email:</h1>
          <p>mosse692@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page4;
