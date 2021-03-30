import React, { createContext, useState, useEffect } from "react";
export const GetDataContext = createContext();

const GetDataProvider = (props) => {
  const [stateGetData, setStateGetData] = useState(false);

  const [dataSearch, setDataSearch] = useState({
    search: "",
    category: "",
  });

  const { search, category } = dataSearch;

  useEffect(() => {
    if (stateGetData === true) {
      const getDrink = async () => {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}&c=${category}`;

        let response = await fetch(url);
        let resJson = await response.json();
        console.log(resJson.drinks);
      };

      getDrink();
      setStateGetData(false);
    }
  }, [search, category, stateGetData]);

  return (
    <GetDataContext.Provider
      value={{
        dataSearch,
        setDataSearch,
        setStateGetData,
      }}
    >
      {props.children}
    </GetDataContext.Provider>
  );
};

export default GetDataProvider;
