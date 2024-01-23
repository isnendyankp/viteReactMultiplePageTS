import React, { createContext, useContext, useState, useEffect } from 'react';


interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}
