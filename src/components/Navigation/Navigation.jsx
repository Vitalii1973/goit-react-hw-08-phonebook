import { NavLink } from 'react-router-dom';
import { useAuth } from '..//../hooks/useAuth';
import {} from './Navigation.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && (
        <NavLink className="contacts-nav" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
