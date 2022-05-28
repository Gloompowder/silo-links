import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from './logo.png';
import tiktok from './tiktok.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import instagram from './instagram.png';

function Home() {
    let navigate = useNavigate();

    function handleClickapp(event) {
        navigate("/applink");
      }
      
      function handleClickhome(event) {
        navigate("/");
      }
    return(
        <div className = "Home">
                  <div className="logo-div">
      <img onClick = {handleClickhome} src={logo} alt="Silo-logo" className = "logo"/>
      </div>
            <div className="website-download-div">
            <div onClick={handleClickapp} className ='download'>Download Silo</div>
                <a className = 'website' target= "_blank" rel="noreferrer" href="https://www.booksilo.co">Visit Website</a>
            </div>
            <a className = 'contact' target= "_blank" rel="noreferrer" href="https://www.booksilo.co/contact">Contact Us</a>
            <div className ="SocialMedia">
        <div className="icons">
            <div className= 'icon-pair'>
            <a className = 'linkedin-link' target= "_blank" rel="noreferrer" href="https://www.linkedin.com/company/worksilo/">
            <img alt="riajulislam: linkedin" src={linkedin}></img>
            </a>
            <a className = 'instagram-link' target= "_blank" rel="noreferrer" href="https://www.instagram.com/silopods/">            
            <img alt = "pixel perfect: instagram" src={instagram}></img>
            </a>
            </div>
            <div className = 'icon-pair'>
            <a className = 'facebook-link' target= "_blank" rel="noreferrer" href="https://www.facebook.com/silo">
            <img alt="Freepik: facebook" src={facebook}></img>
            </a>
            <a className = 'tiktok-link' target= "_blank" rel="noreferrer" href="https://www.tiktok.com/@silo.pods">
                <img alt="Freepik: tiktok" src={tiktok}></img></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;