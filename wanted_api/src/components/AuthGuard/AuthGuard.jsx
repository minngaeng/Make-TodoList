import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (
      token &&
      (window.location.pathname === '/signin' ||
        window.location.pathname === '/signup')
    ) {
      navigate('/todo');
    } else if (!token && window.location.pathname === '/todo') {
      navigate('/signin');
    } else if (!token) {
      navigate('/signup');
    }
  }, []);
  return children;
};

export default AuthGuard;
