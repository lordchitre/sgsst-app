import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export const Navbar = () => {
  return (
    <div className="flex items-center px-6 justify-between border-y">
        <img src={Logo} width="100" alt="" />
        <div className="flex gap-6">
          <div>
            <Link to="/" className="text-lg">
              Iniciar sesion
            </Link>
          </div>
          <div>
            <Link to="/register" className="text-lg">
              Registrarme
            </Link>
          </div>
        </div>
    </div>
  )
}
