import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../../Header/Header';
import userAction from '../../../store/action/userAction';
import './UserProfile.css';

function UserProfile() {
  //const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <Header />
      <br />
      <div className="USERPROFILE text-center vertical-align">
        <div className="card">
          <div className="jumbotron text-center">
            <div className="card-header"><h4>Basic Details</h4></div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b> Name: </b>
                Karan Patel
              </li>
              <li className="list-group-item">
                <b>Email: </b>
                karan@gmail.com
              </li>
              <li className="list-group-item">
                <b>Address: </b>
                1306 The Alameda, San Jose, CA, USA
              </li>
            </ul>
            <div className="card-header"><h4>Card Details</h4></div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Card Holders Name: </b>
                Karan Patel
              </li>
              <li className="list-group-item">
                <b>Card Number: </b>
                1234567890123456
              </li>
              <li className="list-group-item">
                <b>Expiry Date: </b>
                04/2020
              </li>
              <li className="list-group-item">
                <b>CVV: </b>
                123
              </li>
            </ul>
          </div>
          <div className="button">
            <button
              type="button"
              className="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#myModal"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Details</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form className="form-signin" onSubmit={(e) => { e.preventDefault(); dispatch(userAction.userupdate(e, history)); }}>
                  <div className="form-group row ">
                    <div className="col">
                      <select className="form-control" placeholder="Driver License State">
                        <option value="" disabled selected>Driver License State</option>
                        <option value="CA">CA</option>
                        <option value="NY">NY</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Driver License Number"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        id="mobile"
                        placeholder="Mobile Number"
                        maxLength="16"
                        pattern="\d{16}"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="CCname"
                        placeholder="Card Holders Name"
                        pattern="\w+ \w+.*"
                        title="Fill your first and last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="CCnumber"
                        placeholder="Card Number"
                        autoComplete="off"
                        maxLength="16"
                        pattern="\d{16}"
                        title="Fill your 16 digit card name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Expiry Month"
                            maxLength="2"
                            pattern="\d{2}"
                          />
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Expiry Year"
                            maxLength="4"
                            pattern="\d{4}"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="cvv"
                        name="cvv"
                        placeholder="CVV"
                        autoComplete="off"
                        maxLength="4"
                        pattern="\d{4}"
                        title="Fill your 16 digit card name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <button type="submit" className="btn btn-success">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
