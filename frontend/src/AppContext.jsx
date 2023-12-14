import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AppContext = createContext();//to create context import createContext

export const AppProvider = ( {children}) => {
///to get data from sessionstorage of browser
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user')) //json.parse used to change the json data into jsx
  )

    const [loggedin, setLoggedin] = useState(currentUser !== null);

    const navigate = useNavigate();
    // to remove the data after logout
    const logout = () => {
      setLoggedin(false);
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      navigate('/login');
    }



  return<AppContext.Provider value={{loggedin, setLoggedin , logout, currentUser}}>
    {children} 
    {/* to display the component */}
  </AppContext.Provider>
};

//import useContext
const useAppContext = () => {return useContext(AppContext)}

export default useAppContext;