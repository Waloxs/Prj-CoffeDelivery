'use client'

import { createContext, ReactNode, useState } from 'react';

type UserProviderProps = {
  children: ReactNode;
}

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  
  const [value, setValue] = useState<any>(null); 
  const [list, setList] = useState<any>([]);

  return (
    <UserContext.Provider value={{ value, setValue, list, setList }}>
      {children}
    </UserContext.Provider>
  );
}
