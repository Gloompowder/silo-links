import React from 'react';
import tiktok from './tiktok.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

function SocialMedia(){
    const navigate = useNavigate();
    function handleClickhome(event) {
        navigate("/");
      }
    return(
        <div className ="SocialMedia">
            <div className="logo-div">
                <img onClick = {handleClickhome} src={logo} alt="Silo-logo" className = "logo"/>
            </div>
        <div className="icons">
            <div className= 'icon-pair'>
            <a className = 'linkedin-link' target= "_blank" rel="noreferrer" href="https://www.linkedin.com/company/worksilo/"></a>
            <img alt="riajulislam: linkedin" src={linkedin}></img>
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
    )
}

export default SocialMedia;