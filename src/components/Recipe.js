import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Recipe = ({ drink }) => {
  const { setIdDrink } = useContext(ModalContext);

  const handleClick = (e) => {
    e.preventDefault();

    setIdDrink(drink.idDrink);
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header "> {drink.strDrink}</h2>
        <img
          src={drink.strDrinkThumb}
          alt="imgDrink"
          className="card-img-top"
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={handleClick}
          >
            ver receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
