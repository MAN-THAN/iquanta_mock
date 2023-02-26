import React, { useState, useEffect, useContext } from "react";


export const Context = React.createContext();

export function useAuth() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [varcId, SetVarc] = useState("");
  const [lrdiId, setLrdi] = useState("");
  const [quantsId, setquants] = useState("");

  useEffect(() => {
    // Read the JSON file and set the state accordingly
    const fetchData = async () => {
      const response = await fetch('http://43.204.36.216:5000/api/admin/v1/mocks');
      const data = await response.json();
       SetVarc(data.mocks[0]._id)
      setLrdi(data.mocks[1]._id)
      setquants(data.mocks[2]._id)
    };
    fetchData();
  }, []);






  
  return (
    <>

   
      <Context.Provider value={{lrdiId ,varcId,quantsId }}>{children}</Context.Provider>
    </>
  );
};
