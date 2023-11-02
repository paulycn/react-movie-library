import {FaFacebookSquare, FaInstagram, FaLinkedin} from "react-icons/fa"

function Footer () {
    return (
        <footer>
            <nav>
              <span>
                 © 2023 Paula Cazac. All rights reserved.
              </span>
              <div>
                <a href="https://www.facebook.com">
                    <FaFacebookSquare/>
                </a>
                <a href="https://www.instagram.com">
                    <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com">
                    <FaLinkedin/>
                </a>
            </div>
            </nav>
        </footer>
    )
}

export default Footer