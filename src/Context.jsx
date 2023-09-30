import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const Context = ({ children }) => {
  const [type, setType] = useState("C");
  return (
    <GlobalContext.Provider value={{ type, setType }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
