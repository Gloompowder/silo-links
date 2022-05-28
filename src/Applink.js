import './Applink.css';
import Appstore from './Appstore.svg';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';


function Applink() {
    let navigate = useNavigate();

    function handleClickhome(event) {
        navigate("/");
      }
  return (
    <div className="Applink">
              <div className="logo-div">
      <img onClick = {handleClickhome} src={logo} alt="Silo-logo" className = "logo"/>
      </div>
                    <a className = 'appstorelink' target= '_blank' href='https://apps.apple.com/us/app/silo-pods/id1604451202'>
                <img className = 'appstore' alt='Get Silo on the App Store' src={Appstore}/>
            </a>
            <a className = 'googleplaylink' target= '_blank' href='https://play.google.com/store/apps/details?id=com.silo&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img className = 'googleplay' alt='Get Silo on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
            </a>
    </div>
  );
}

export default Applink;
