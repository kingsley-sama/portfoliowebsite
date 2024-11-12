import React, { createContext, useState, useContext, useCallback } from 'react';
const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [isGreen, setIsGreen] = useState(false);

  const setGreenState = useCallback((state) => {
    setIsGreen(state);
  }, []);

  return (
    <ColorContext.Provider value={{ isGreen, setGreenState }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
