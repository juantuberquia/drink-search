import React, { createContext, useState, useEffect } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idDrink, setIdDrink] = useState(null);
  const [saveIdDrink, setSaveIdDrink] = useState({});

  useEffect(() => {
    if (idDrink !== null) {
      const getDataID = async () => {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
        let response = await fetch(url);
        let resJson = await response.json();
        setSaveIdDrink(resJson.drinks[0]);
      };

      getDataID();
      setSaveIdDrink({});
    }
  }, [idDrink]);

  return (
    <ModalContext.Provider value={{ setIdDrink, saveIdDrink }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
