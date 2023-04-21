import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Logo.css'

function Logo() {
  return (
    <Link className="logo-link" to="/">
      <img  src={logo} alt="Логотип сайта" />
    </Link>
  )
}

export default Logo;