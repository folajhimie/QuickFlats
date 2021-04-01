import React, { Component } from "react";
import FormBg from "../../assets/images/formbg.png";
import "./listing-description-data.styles.css";
import Input from "../input";

class ListingDescriptionData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="form-con">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 animate__animated animate__fadeInUp">
              <h2>
                {" "}
                Time to add some images and a good description of your flat
              </h2>

              {/* <hr /> */}
              <form action="" className="list-form">
                <ul className="form-style-1">
                  <li>
                    <label>
                      Make sure the room is properly cleaned, and the pictures
                      are clear and clean
                      <span className="required">*</span>
                    </label>
                    <Input
                      type="file"
                      name="upload flat"
                      onChange={handleChange("pictureUpload")}
                      value={values.pictureUpload}
                    />
                  </li>
                  <li>
                    <label>
                      Description <span className="required">*</span>
                    </label>
                    <textarea
                      name="field5"
                      id="field5"
                      className="field-long field-textarea"
                      onChange={handleChange("flatDescription")}
                      value={values.flatDescription}
                    ></textarea>
                  </li>
                  <div className="button-con mt-3">
                    <div>
                      <button className="back" onClick={this.back}>
                        back
                      </button>
                    </div>
                    <div>
                      <button className="continue" onClick={this.continue}>
                        continue
                      </button>
                    </div>
                  </div>
                </ul>
              </form>
            </div>
            <div className="col-sm-6">
              <img src={FormBg} alt="form-bg" className="form-bg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingDescriptionData;
