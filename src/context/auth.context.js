import { createContext, useState, useEffect } from 'react';
import { API_URL } from '../config';
import axios from 'axios';
const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [pets, setPets] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const authenticateUser = () => {
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          // If the server verifies that JWT token is valid  ✅
          const user = response.data;

          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token) ❌
          // Update state variables
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      // If the token is not available
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem('authToken');
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  //pet routes
  const fetchPets = async () => {
    const storedToken = localStorage.getItem('authToken');
    await axios
      .get(`${API_URL}/auth/fetch-pets`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((petsResponse) => {
        const pets = petsResponse.data;
        setPets(pets);
        console.log('here are the DB pets', petsResponse);
      })
      .catch((error) => {
        setPets(null);
        console.log('There was an error fetching the pets', error);
      });
  };
  useEffect(() => {
    // Run the function after the initial render,
    // after the components in the App render for the first time.
    authenticateUser();
    fetchPets();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        pets,
        fetchPets,
        setUser,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
