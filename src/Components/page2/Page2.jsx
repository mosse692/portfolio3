import './Page2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import signature from '../../imgs/signature.jpg' 
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';


function Page2() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className='Page2' id='Experience'>
            <div className='page2__content' >
                <div className='text' data-aos="fade-right" data-aos-offset="200">
                    <h1>Experience</h1>
                    <p className='description'>
                        I have worked as a coder/programmer for around 5 years on and off,
                        mostly with javascript based technologies like Node JS, React JS,
                        Vue JS, Express JS, Git, Webpack, etc.
                    </p>
                    <br />
                    <p>HOPE WE CAN WORK TOGETHER!</p>
                    <br />
                    <div className='signature'>
                        <p>Signature:</p>
                        <br />
                        <div className='pic'>
                            <img src={signature} alt="" />
                        </div>
                    </div>
                    <br />
                    <p>Technologies:</p>
                    <br />
                    <div className='logos'>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faGit} />
                        </div>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faVuejs} />
                        </div>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faNodeJs} />
                        </div>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faJs} />
                        </div>
                    </div>

                </div>

                <div className='image' data-aos="fade-left" data-aos-delay="50">

                </div>
            </div>
        </div>
    )
}

export default Page2;
