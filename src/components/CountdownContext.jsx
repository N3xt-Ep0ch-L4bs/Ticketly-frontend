import { createContext, useContext, useState } from "react";

const CountdownContext = createContext();

export const CountdownProvider = ({ children }) => {
  const [countdownTimes, setCountdownTimes] = useState({
    startTime: null,
    endTime: null,
  });

  return (
    <CountdownContext.Provider value={{ countdownTimes, setCountdownTimes }}>
      {children}
    </CountdownContext.Provider>
  );
};

export const useCountdown = () => useContext(CountdownContext);
