import React, { useContext } from "react";
import { GetDataContext } from "../context/GetDataContext";
import Recipe from "./Recipe";

const ShowDrinks = () => {
  const { drinks } = useContext(GetDataContext);

  return (
    <div className="row mt-5">
      {drinks.map((drink) => (
        <Recipe key={drink.idDrink} drink={drink} />
      ))}
    </div>
  );
};

export default ShowDrinks;
