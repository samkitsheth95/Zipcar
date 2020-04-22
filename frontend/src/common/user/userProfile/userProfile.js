import React from "react";
import Header from "../../Header/Header";

function userProfile() {
  return (
    <div>
      <Header />
      <img
        src="zipcar.png"
        className="float-left"
        alt="Responsive Image"
        width="240"
        height="126"
      ></img>
      <form>
        <div className="form-group row">
          <label for="staticName" className="col-sm-1 col-form-label">
            Name:
          </label>
          <div className="col-sm-2">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticName"
              value="Karan"
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-1   col-form-label">
            Email:
          </label>
          <div className="col-sm-2">
            <input
              type="email"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value="karan@gmail.com"
            ></input>
          </div>
        </div>
        &nbsp;
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <label for="LicenseState" className="col-sm-5   col-form-label">
              <h5>Driver License State: </h5>
            </label>
            <div className="col">
              <select className="form-control">
                <option>CA</option>
                <option>NY</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <label for="LicenseNumber" className="col-sm-5   col-form-label">
              <h5>Driver License Number:</h5>
            </label>
            <div className="col">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="123456789"
              ></input>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <label for="address" className="col-sm-5   col-form-label">
              <h5>Address:</h5>
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1306 The Alameda"
              ></input>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <label for="mobile" className="col-sm-5   col-form-label">
              <h5>Mobile Number:</h5>
            </label>
            <div className="col">
              <input
                type="number"
                className="form-control"
                id="mobile"
                placeholder="1234567890"
              ></input>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <legend>Payment:</legend>
            <label for="CCname" className="col-sm-3   control-label">
              Card Holder's Name:
            </label>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="CCname"
                placeholder="ABC XYZ"
                pattern="\w+ \w+.*"
                title="Fill your first and last name"
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="form-group">
          {/* <div className="col-sm-10 offset-sm-2"> */}
            <label for="CCnumber" className="control-label">
              Card Number:
            </label>
            <div className="controls">
              <div className="row-fluid">
                <div className="span3">
                  <input
                    type="text"
                    class="input-block-level"
                    autocomplete="off"
                    maxlength="4"
                    pattern="\d{4}"
                    title="First four digits"
                    required
                  ></input>
                </div>
                <div className="span3">
                  <input
                    type="text"
                    class="input-block-level"
                    autocomplete="off"
                    maxlength="4"
                    pattern="\d{4}"
                    title="Second four digits"
                    required
                  ></input>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        &nbsp;
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default userProfile;
