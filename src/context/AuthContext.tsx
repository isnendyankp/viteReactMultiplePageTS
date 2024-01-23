import React, { createContext, useContext, useState, useEffect } from 'react';


interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode; // Tambahkan tipe untuk children
}


const AuthContext = createContext<AuthContextProps | undefined>(undefined);


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);


    // cr8 useEffect hook to check if token is stored in local storage
     useEffect(() => {
       // Cek apakah token tersimpan di local storage
       const token = localStorage.getItem('token');
       if (token) {
         setIsAuthenticated(true);
       }
     }, []);

    // cr8 login function
     const login = (token: string) => {
       localStorage.setItem('token', token);
       setIsAuthenticated(true);
     };

    // cr8 logout function
     const logout = () => {
       localStorage.removeItem('token');
       setIsAuthenticated(false);
     };
}