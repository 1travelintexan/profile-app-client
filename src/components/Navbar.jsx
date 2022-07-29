import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import logo from '../images/logo.png';
function Navbar() {
  const { logOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOutUser();
    navigate('/');
  };
  if (!user) return <p>Loading from nav</p>;
  return (
    <div id="navbar-container">
      <div id="navbar">
        <img className="logo" src={logo} alt="logo" />
        <h1>The-Pet-App!</h1>
        <div>
          <img
            src={user.profileImage}
            alt="profile"
            className="profile-image"
          />
        </div>
      </div>
      <Button variant="info" id="logoutBtn" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Navbar;
