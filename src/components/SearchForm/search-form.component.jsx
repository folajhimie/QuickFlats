import React from "react";
import CustomButton from "../button/button.component";
import "./search-form.styles.css";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="form">
        <form action="" className="search-form">
          {/* <label htmlFor="location" className="form-label">
            location of flat
          </label> */}
          <select name="location" className="form-control select" id="location">
            <option value="Select location">Select location</option>
            <option value="Ikeja">Ikeja</option>
            <option value="Yaba">Yaba</option>
            <option value="Lekki">Lekki</option>
            <option value="Victoria island">Victoria island</option>
          </select>
          {/* <label htmlFor="rooms">rooms</label> */}
          <input
            type="text"
            placeholder="How many rooms"
            className="form-control"
            id="rooms"
          />
          {/* <label htmlFor="price">Budget</label> */}
          <input
            type="text"
            placeholder="Budget"
            className="form-control"
            id="price"
          />
          <input
            type="date"
            placeholder="Date"
            className="form-control"
            id="date"
          />
          <CustomButton className="ml-4 " label="Find flat" size="300px" />
        </form>
      </div>
    );
  }
}
export default SearchForm;
