import React from 'react';
import "../assets/css/footer.css";
export default function Footer() {

    return (

        <footer>
            <div className="footer">
                <p>Made with &#10084; by Rashid</p>
                
                <ul className="socials">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-github"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
                <div className="footer-copyright">
                    <p>copyright &copy;2023 </p>
                </div>
            </div>
        </footer>


    )

}