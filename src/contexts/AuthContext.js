import { createContext, useState, useContext } from "react"

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userName, setUserName] = useState('');

    return(
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn, userName, setUserName }}>
            {children}  
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}