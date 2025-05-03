"use client"
import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext({
  isLoading: false,
  loadingStart: (): void => {},
  loadingEnd: (): void => {},
});

export const useLoad = () => useContext(LoadingContext);

const LoadingContextProvider: React.FC<{ children: React.ReactNode }> =({ children })=> {
  const [isLoading, setIsLoading] = useState(false);

  const loadingStart = () => {
    setIsLoading(true);
  };
  const loadingEnd = () => {
    setIsLoading(false);
  };

  const contextValue = {
    isLoading,
    loadingStart,
    loadingEnd,
  };

  return (
    <LoadingContext.Provider value={contextValue}>{children}</LoadingContext.Provider>
  );
}

export default LoadingContextProvider