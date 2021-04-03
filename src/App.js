import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ShowDrinks from "./components/ShowDrinks";
import CategoriesProvider from "./context/CategoriesContext";
import GetDataProvider from "./context/GetDataContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriesProvider>
      <GetDataProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ShowDrinks />
          </div>
        </ModalProvider>
      </GetDataProvider>
    </CategoriesProvider>
  );
}

export default App;
