import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../common/Header/Header';
import userAction from '../../store/action/userAction';
import adminAction from '../../store/action/adminActions';
import './UserProfile.css';
import states from './states';

function UserProfile() {
  const userdata = useSelector((state) => state.userReducer);
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const dispatch = useDispatch();
  const memberUpdate = useSelector((state) => state.adminReducer.memberUpdate);
  const extendmember = userdata.user.membermonth + 6;
  useEffect(() => {
    dispatch(userAction.getuser());
  }, [dispatch, userdata.userUpdate, memberUpdate]);

  return (
    <div className="USERPROFILE">
      <Header />
      {loggedIn && (
        <div className="container">
          <br />
          <div className="button text-center">
            <button
              type="button"
              className="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#myModal"
            >
              Edit Details
            </button>
          </div>
          <br />
          <div>
            <div className="row">
              <div className="col-sm-4">
                <div className="card-loca card shadow-sm">
                  <div className="card-body">
                    <h4>Basic Details</h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b> Name: </b>
                        {userdata.user.name}
                      </li>
                      <li className="list-group-item">
                        <b>Email: </b>
                        {userdata.user.email}
                      </li>
                      <li className="list-group-item">
                        <b>Address: </b>
                        {userdata.user.address}
                      </li>
                      <li className="list-group-item">
                        <b>Cell Number: </b>
                        {userdata.user.phone}
                      </li>
                      <li className="list-group-item">
                        <b>Membership Status: </b>
                        {userdata.user.memberstatus ? 'Active' : 'Inactive'}
                      </li>
                      <li className="list-group-item">
                        <b>Membership Ends On: </b>
                        {userdata.user.membershipEnds}
                      </li>
                      <br />
                      {userdata.user.memberstatus ? (
                        <button
                          onClick={() => {
                            dispatch(
                              adminAction.changemember(
                                userdata.user.id,
                                !userdata.user.memberstatus,
                              ),
                            );
                          }}
                          type="button"
                          className="btn btn-danger"
                        >
                          Deactivate Membership
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            dispatch(
                              adminAction.changemember(
                                userdata.user.id,
                                !userdata.user.memberstatus,
                              ),
                            );
                          }}
                          type="button"
                          className="btn btn-success"
                        >
                          Activate Membership
                        </button>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card-loca card shadow-sm">
                  <div className="card-body">
                    <h4>License Details</h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b>Driver License State: </b>
                        {userdata.user.driverstate}
                      </li>
                      <li className="list-group-item">
                        <b>Card License Number: </b>
                        {userdata.user.drivernumber}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card-loca card shadow-sm">
                  <div className="card-body">
                    <h4>Card Details</h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b>Card Holders Name: </b>
                        {userdata.user.ccname}
                      </li>
                      <li className="list-group-item">
                        <b>Card Number: </b>
                        {userdata.user.ccnumber}
                      </li>
                      <li className="list-group-item">
                        <b>Expiry Date: </b>
                        {userdata.user.expirymonth}
                        /
                        {userdata.user.expiryyear}
                      </li>
                      <li className="list-group-item">
                        <b>CVV: </b>
                        {userdata.user.cvv}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
                  <form
                    className="form-signin"
                    onSubmit={(e) => {
                      e.preventDefault();
                      dispatch(userAction.userupdate(e));
                    }}
                  >
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          name="name"
                          defaultValue={userdata.user.name}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          defaultValue={userdata.user.email}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row ">
                      <div className="col">
                        <select
                          className="form-control"
                          placeholder="Driver License State"
                          name="driverstate"
                          defaultValue="DEFAULT"
                          required
                        >
                          <option value="DEFAULT" disabled>
                            Driver License State
                          </option>
                          {Object.keys(states).map((key) => (
                            <option key={key} value={states[key]}>
                              {states[key]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          id="drivernumber"
                          placeholder="Driver License Number"
                          name="drivernumber"
                          defaultValue={userdata.user.drivernumber}
                          required
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
                          defaultValue={userdata.user.address}
                          required
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
                          defaultValue={userdata.user.phone}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <label htmlFor="membermonth" className="form-check-label">
                          Extend Membership for 6 months ?
                        </label>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="membermonth"
                          placeholder="Extend Membership(Months)"
                          name="membermonth"
                          value={extendmember || ''}
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
                          defaultValue={userdata.user.ccname}
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
                          defaultValue={userdata.user.ccnumber}
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
                              defaultValue={userdata.user.expirymonth}
                              required
                            />
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Expiry Year"
                              name="expiryyear"
                              maxLength="4"
                              pattern="\d{4}"
                              defaultValue={userdata.user.expiryyear}
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
                          defaultValue={userdata.user.cvv}
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
      )}
    </div>
  );
}

export default UserProfile;
