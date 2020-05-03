import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import adminAction from '../../store/action/adminActions';
import userAction from '../../store/action/userAction';
import Header from '../../common/Header/Header';
import './UserHome.css';


function UserHome() {
  const dispatch = useDispatch();
  const adminVehicletype = useSelector(
    (state) => state.adminReducer.vehicletype,
  );
  const adminLocations = useSelector((state) => state.adminReducer.location);

  useEffect(() => {
    dispatch(adminAction.getlocations());
    dispatch(adminAction.getvehicletype());
  }, [dispatch]);
  return (
    <div>
      <Header />
      {/* <div className="container heading-container">
        <div className="col text-center">
          <h3>Search Available Vehicles to rent</h3>
        </div>
      </div> */}
      <div className="container">
        <form
          className="form-search"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(userAction.search(e));
          }}
        >
          <div className="form-group row">
            <div className="col-sm-6">
              <input
                type="text"
                id="vehicle"
                className="form-control"
                placeholder="Write Vehicle you want to rent"
                name="name"
                required
              />
            </div>
            <div className="col-sm-2">
              <select
                className="form-control"
                id="vehicletype"
                placeholder="Vehicle Type"
                name="vehicletype"
                defaultValue=""
              >
                <option disabled selected>Vehicle Type</option>
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
            <div className="col-sm-2">
              <select
                className="form-control"
                id="rentallocation"
                placeholder="Rental Location"
                name="rentallocation"
                defaultValue=""
              >
                <option value="" disabled selected>Location</option>
                {adminLocations.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}

                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}

export default UserHome;
