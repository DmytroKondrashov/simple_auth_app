import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem('site') || "");
  const navigate = useNavigate();

  const loginAction = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/google/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      console.log(res);
    } catch(error) {
      console.error(error);
    }
  }

  const logOut = () => {
    setToken("");
    localStorage.removeItem("site");
    navigate('/');
  }

  return ( <AuthContext.Provider value={{ token, loginAction, logOut }}>
          {children}
          </AuthContext.Provider>)
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
}
