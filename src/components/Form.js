import React, { useContext, useEffect } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { GetDataContext } from "../context/GetDataContext";

const Form = () => {
  const { categories, setCategories } = useContext(CategoriesContext);
  const { setDataSearch, dataSearch, setStateGetData } = useContext(
    GetDataContext
  );

  useEffect(() => {
    const getCategoriesApi = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const response = await fetch(url);
      const resJson = await response.json();
      setCategories(resJson.drinks);
    };
    getCategoriesApi();
  }, []);

  const handleChange = (e) => {
    setDataSearch({
      ...dataSearch,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { search, category } = dataSearch;

    if (search.trim() === "" || category.trim() === "") {
      setStateGetData(false);
    } else {
      setStateGetData(true);
    }
  };

  return (
    <form className="col-12" onSubmit={handleSubmit}>
      <fieldset className="text-center">
        <legend> buscador bebidas por categoria o ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <input
            type="text"
            placeholder="Busqueda por ingrediente"
            name="search"
            className="form-control"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-md-4 mb-3">
          <select
            className="form-control"
            name="category"
            onChange={handleChange}
          >
            <option value=""> --Seleccionar categoria--</option>
            {categories.map((drink) => (
              <option key={drink.strCategory} value={drink.strCategory}>
                {drink.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default Form;
