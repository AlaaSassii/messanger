import { createContext, useContext ,ReactNode } from "react";
import {useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../config/firebaseConfig";
const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }:Props) => {
    const [user] = useAuthState(auth); 
  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );
};

interface Props {
            children:ReactNode
}