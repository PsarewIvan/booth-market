import Contacts from '../Contacts/Contacts';
import Map from '../Map/Map';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <Contacts />
      </div>
      <div className="footer__map">
        <Map />
      </div>
    </footer>
  );
};

export default Footer;
