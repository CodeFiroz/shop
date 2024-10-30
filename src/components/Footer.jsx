
import React from 'react';
import logo from '../assets/img/logo.svg';
import payment from '../assets/img/payments.png';

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div>

            <img src={logo} alt="Ecommerce" />

            <a href="#">+01 25648 30164</a>
            <a href="#">info@ecommerce.com</a>

        </div>

        <div>
            <h4>
                Policies
            </h4>
            <ul>
                <li><a href="#">Return & Exchange</a></li>
                <li><a href="#">Payment Term</a></li>
                <li><a href="#">Delivery Term</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>

        <div>
            <h4>
                Informations
            </h4>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Sell With us</a></li>
                <li><a href="#">Track your order</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <div>
            <h4>
                Stay Tune With us
            </h4>
           <div className="social">
            <a href="#"><i className="fi fi-brands-facebook"></i></a>
            <a href="#"><i className="fi fi-brands-instagram"></i></a>
            <a href="#"><i className="fi fi-brands-twitter-alt"></i></a>
            <a href="#"><i className="fi fi-brands-linkedin"></i></a>
           </div>
        </div>


    </div>

    <div className="copyright">
        <p>
            &copy; 2024 Ecommerce Shop | Design By <a href="https://github.com/CodeFiroz">github.com/CodeFiroz</a>
        </p>

<img src={payment} alt="" />

    </div>
    </>
  )
}

export default Footer