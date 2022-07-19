import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
function Navbar() {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOutUser();
    navigate('/');
  };

  return (
    <div id="navbar">
      <h3>Logo</h3>
      <h1>Lab-Profile-App!</h1>
      <Button variant="info" id="logoutBtn" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Navbar;
