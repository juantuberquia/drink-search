import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoriesProvider from "./context/CategoriesContext";
import GetDataProvider from "./context/GetDataContext";

function App() {
  return (
    <CategoriesProvider>
      <GetDataProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
        </div>
      </GetDataProvider>
    </CategoriesProvider>
  );
}

export default App;
