import { NavLink } from 'react-router-dom';
import {} from './AuthNav.css';

export const AuthNav = () => {
  return (
    <div className="navlink">
      <NavLink to="/register" className="register" end={true}>
        Register
      </NavLink>
      <NavLink to="/login" className="register" end={true}>
        Log In
      </NavLink>
    </div>
  );
};
