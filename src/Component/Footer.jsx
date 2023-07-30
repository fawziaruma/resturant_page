import Logo from "../assets/Logo.svg"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"

const Footer = () => {
  return (
   <div className="footer-wraper">
    <div className="footer-section-one">
        <div className="footer-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="footer-icon-container">
            <BsTwitter/>
            <BsLinkedin/>
            <BsYoutube/>
            <BsFacebook/>
        </div>
    </div>
    <div className="footer-section-two">
        <div  className="footer-section-columns">
                <span>Quality</span>
                <span> Help </span>
                <span> Share </span>
                <span>Carrer</span>
                <span> Testimonial </span>
                <span> Work </span>
        </div>
        <div  className="footer-section-columns">
                <span>888-654-147</span>
                <span> abc@gmail.com</span>
                <span> food@gmail.com </span>
                <span>Contract@food.com</span>
        </div>
        <div  className="footer-section-columns">
                <span>Terms & condtion </span>
                <span>  Privacey Policy </span>
             
        </div>
    </div>
   </div>
  )
}

export default Footer