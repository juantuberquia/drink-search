import React, { createContext, useState, useEffect } from "react";
export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idDrink, setIdDrink] = useState(null);

  useEffect(() => {
    if (idDrink !== null) {
      const getDataID = async () => {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;

        let response = await fetch(url);
        let resJson = await response.json();

        console.log(resJson.drinks);
      };

      getDataID();
    }
  }, [idDrink]);

  return (
    <ModalContext.Provider value={{ setIdDrink }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
