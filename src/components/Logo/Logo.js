import logo from './img/logo.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="Company logo" />
    </div>
  );
};

export default Logo;
