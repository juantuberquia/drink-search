import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ drink }) => {
  const { setIdDrink, saveIdDrink } = useContext(ModalContext);

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIdDrink(null);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleOpen();
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

          <Modal open={open} onClick={handleClose}>
            <div style={modalStyle} className={classes.paper}>
              <h2> {saveIdDrink.strDrink}</h2>
              <h3 className="mt-4"> Instrucciones </h3>
              <p> {saveIdDrink.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={saveIdDrink.strDrinkThumb}
                alt={saveIdDrink.strDrink}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
