import React, { createContext, useState } from "react";

export const CategoriesContext = createContext();

// provider es donde se encuentran las funciones y state
const CategoriesProvider = (props) => {
  // menu de bebidas
  const [categories, setCategories] = useState([]);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
