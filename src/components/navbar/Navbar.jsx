import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import './styles.css';

export const Navbar = () => {
  return (
    <div className="flex items-center px-6 justify-between border-y">
        <img src={Logo} width="100" alt="" />
        <div className="flex gap-6">
          <div>
            <Link to="/">
              <a className="text-lg">Iniciar sesion</a>
            </Link>
          </div>
          <div>
            <Link to="/register">
              <a className="text-lg">Registrarme</a>
            </Link>
          </div>
        </div>
    </div>
  )
}
