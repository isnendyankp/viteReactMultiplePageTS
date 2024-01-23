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
}