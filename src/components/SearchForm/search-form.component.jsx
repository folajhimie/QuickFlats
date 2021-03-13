import React from "react";
import "./search-form.styles.css";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="form">
        <form action="" className="search-form">
          <div className="search-form-fields">
            <div className="search-form-fields-wrapper">
              <div className="search-form-input">
                <div className="location role">
                  <div className="search-destination">
                    <div className="presentation">
                      <div className="search-destination-input">
                        <label htmlFor="location">Location</label>
                        <input
                          id="location"
                          type="text"
                          size="10"
                          placeholder="Location"
                          className="form-control"
                          value
                          autoComplete="off"
                          aria-autocomplete="both"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchForm;
