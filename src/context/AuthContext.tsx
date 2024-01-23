import React, { createContext, useContext, useState, useEffect } from 'react';


interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextProps | undefined>(undefined);