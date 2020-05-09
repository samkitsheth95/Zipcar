import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa';
import adminAction from '../../store/action/adminActions';
import userAction from '../../store/action/userAction';
import Header from '../../common/Header/Header';
import './UserHome.css';

function getDate(d) {
  const yearString = d.getFullYear();
  const monthString = `0${(d.getMonth() + 1)}`.slice(-2);
  const dateString = `0${(d.getDate())}`.slice(-2);
  const timeString = `${d.toTimeString().split(' ')[0].slice(0, -3)}`;
  const finalString = `${yearString}-${monthString}-${dateString}T${timeString}`;

  return finalString;
}

function UserHome() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const adminVehicletype = useSelector(
    (state) => state.adminReducer.vehicletype,
  );
  const searcherr = useSelector((state) => state.userReducer.bookingerr);
  const adminLocations = useSelector((state) => state.adminReducer.location);
  const searchRes = useSelector((state) => state.userReducer.searchRes);
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const minDate = getDate(new Date());
  const maxDate = getDate(new Date(new Date().getTime() + 91 * 86400000));
  useEffect(() => {
    dispatch(adminAction.getlocations());
    dispatch(adminAction.getvehicletype());
  }, [dispatch]);
  return (
    <div>
      <Header />
      {loggedIn && (
        <div className="USERHOME container">
          <form
            className="form-search"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(userAction.search(e));
            }}
          >
            <div className="form-group row">
              <div className="col-md-6 mb-4 mb-md-0">
                <input
                  type="text"
                  id="vehicle"
                  className="form-control"
                  placeholder="Type Vehicle you want to rent"
                  name="name"
                  required
                />
              </div>
              <div className="col-md-2 mb-4 mb-md-0">
                <select
                  className="form-control"
                  id="vehicletype"
                  placeholder="Vehicle Type"
                  name="vehicletype"
                  defaultValue="DEFAULT"
                >
                  <option value="DEFAULT" disabled>
                    Vehicle Type
                  </option>
                  {adminVehicletype.map((vehicletype) => (
                    <option
                      key={vehicletype.id}
                      value={vehicletype.vehicletype}
                    >
                      {vehicletype.vehicletype}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-2 mb-4 mb-md-0">
                <select
                  className="form-control"
                  id="rentallocation"
                  placeholder="Rental Location"
                  name="rentallocation"
                  defaultValue="DEFAULT"
                >
                  <option value="DEFAULT" disabled>
                    Location
                  </option>
                  {adminLocations.map((location) => (
                    <option key={location.id} value={location.name}>
                      {location.name}
                      ,
                      {location.address}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 col text-center">
                <button type="submit" className="btn btn-success">
                  Search
                </button>
              </div>
              <div className="col-md-1 col text-center">
                <input type="reset" value="Reset" className="btn btn-danger" />
              </div>
            </div>
          </form>
          {searcherr ? <div className="alert alert-danger" role="alert">{searcherr}</div> : ''}
          <div className="row">
            {searchRes.map((vehicle) => (
              <div key={vehicle.id} className="col-sm-4">
                <div className="card-loca card shadow-sm">
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <h4>{vehicle.name}</h4>
                      </li>
                      <li className="list-group-item">
                        Vehicle Type: &nbsp;
                        <b>{vehicle.vehicletype}</b>
                      </li>
                      <li className="list-group-item">
                        Make Year: &nbsp;
                        <b>{vehicle.makeyear}</b>
                      </li>
                      <li className="list-group-item">
                        Model Number: &nbsp;
                        <b>{vehicle.modelnumber}</b>
                      </li>
                      <li className="list-group-item">
                        Registration Tag: &nbsp;
                        <b>{vehicle.registrationtag}</b>
                      </li>
                      <li className="list-group-item">
                        Mileage: &nbsp;
                        <b>{vehicle.mileage}</b>
                      </li>
                      <li className="list-group-item">
                        Last Serviced Date: &nbsp;
                        <b>{vehicle.lastserviced}</b>
                      </li>
                      <li className="list-group-item">
                        Vehicle Condition: &nbsp;
                        <b>{vehicle.vehiclecondition}</b>
                      </li>
                      <li className="list-group-item">
                        Rental Location: &nbsp;
                        <b>{vehicle.rentallocation}</b>
                      </li>
                    </ul>
                    <br />
                    <div className="col text-center">
                      <button
                        type="submit"
                        className="btn col-sm-6 btn-success"
                        data-toggle="modal"
                        data-target="#myModal"
                        onClick={() => setSelectedVehicle(vehicle.id)}
                      >
                        Book &nbsp;
                        <FaCarSide />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Select time and duration</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form
                    className="form-signin"
                    onSubmit={(ev) => dispatch(userAction.book(ev, history))}
                  >
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="datetime-local"
                          className="form-control"
                          id="select-date"
                          placeholder="Ride from:"
                          name="select-date"
                          min={minDate}
                          max={maxDate}
                          defaultValue=""
                          required
                        />

                        <input
                          type="number"
                          className="form-control"
                          id="select-duration"
                          placeholder="Enter duration to rent(hours)"
                          name="select-duration"
                          min="1"
                          max="72"
                          required
                        />

                        <input
                          type="hidden"
                          name="vehicleId"
                          value={selectedVehicle}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col text-center">
                        <button type="submit" className="btn btn-success">
                          Book &nbsp;
                          <FaCarSide />
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

export default UserHome;
