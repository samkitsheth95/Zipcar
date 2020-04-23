import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Header/Header';
import userAction from '../../../store/action/userAction';
import './UserProfile.css';

function UserProfile() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAction.getuser());
  }, [dispatch, user.userUpdate]);
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
                {user.name}
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
                <form className="form-signin" onSubmit={(e) => { e.preventDefault(); dispatch(userAction.userupdate(e)); }}>
                  <div className="form-group row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"

                        placeholder="Email Address"

                      />
                    </div>
                  </div>
                  <div className="form-group row ">
                    <div className="col">
                      <select className="form-control" placeholder="Driver License State" name="driverstate">
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
                        name="drivernumber"
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
                        name="address"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Mobile Number"
                        maxLength="10"
                        pattern="\d{10}"
                        name="phone"
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
                        name="ccname"
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
                        name="ccnumber"
                        autoComplete="off"
                        maxLength="19"
                        pattern="\d{14,19}"
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
                            name="expirymonth"
                            maxLength="2"
                            pattern="\d{2}"
                            required
                          />
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Expiry Year"
                            name="expiryyear"
                            maxLength="4"
                            pattern="\d{4}"
                            required
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
                        pattern="\d{3,4}"
                        title="Fill your 3 or 4 digit CVV"
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
