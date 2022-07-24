import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
function Navbar() {
  const { logOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOutUser();
    navigate('/');
  };
  if (!user) return <p>Loading from nav</p>;
  return (
    <div id="navbar">
      <h3>Logo</h3>
      <h1>Lab-Profile-App!</h1>
      <div>
        <img src={user.profileImage} alt="profile" className="profile-image" />
        <Button variant="info" id="logoutBtn" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
