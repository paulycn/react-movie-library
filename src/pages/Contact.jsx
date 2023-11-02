import {FaFacebookSquare, FaInstagram, FaLinkedin} from "react-icons/fa"
import GoogleMap from "../components/GoogleMap"
import '../css/Contact.scss'

function Contact () {
    return (
        <div className="contact">
            <h4>Christopher Edward Nolan was born on 30 July 1970, in Westminster, London. </h4>
               <GoogleMap/>
               <div>
                <h4>You cand find him on</h4>
                <div className="icons">
                <a href="https://www.facebook.com/ChristopherNolan.info/">Facebook
                    <FaFacebookSquare/>
                </a>
                <a href="https://www.instagram.com/christophernolann/?hl=en">Instagram
                    <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com/">Linkedin
                    <FaLinkedin/>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Contact