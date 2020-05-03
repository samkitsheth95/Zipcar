import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import adminAction from '../../store/action/adminActions';
import Header from '../../common/Header/Header';
import './Vehicle.css';

function Vehicle() {
  const dispatch = useDispatch();
  const adminVehicletype = useSelector(
    (state) => state.adminReducer.vehicletype,
  );
  const adminVehicle = useSelector((state) => state.adminReducer.vehicle);

  const adminLocations = useSelector((state) => state.adminReducer.location);
  const isaddVehicle = useSelector((state) => state.adminReducer.vehicleUpdate);
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const isAdmin = useSelector((state) => state.authReducer.isAdmin);
  const [addDelete, setaddDel] = useState(0);
  const [editvehicle, seteditloc] = useState(1);
  useEffect(() => {
    dispatch(adminAction.getvehicle());
  }, [dispatch, isaddVehicle]);
  useEffect(() => {
    dispatch(adminAction.getlocations());
    dispatch(adminAction.getvehicletype());
  }, [dispatch]);

  return (
    <div className="VEHICLETYPE">
      <Header />
      {loggedIn && isAdmin && (
        <div className="container">
          <br />
          <div className="button text-center">
            <button
              type="button"
              className="btn btn-info btn-lg "
              onClick={() => {
                setaddDel(true);
                seteditloc({});
              }}
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Vehicle
            </button>
          </div>
          <br />
          <div>
            <div className="row">
              {adminVehicle.map((vehicle) => (
                <div key={vehicle.id} className="col-sm-4">
                  <div className="card-loca card shadow-sm">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <h4>{vehicle.vehicletype}</h4>
                        </li>
                        <li className="list-group-item">
                          Name:
                          &nbsp;
                          <b>{vehicle.name}</b>
                        </li>
                        <li className="list-group-item">
                          Make Year:
                          &nbsp;
                          <b>{vehicle.makeyear}</b>
                        </li>
                        <li className="list-group-item">
                          Model Number:
                          &nbsp;
                          <b>{vehicle.modelnumber}</b>
                        </li>
                        <li className="list-group-item">
                          Registration Tag:
                          &nbsp;
                          <b>{vehicle.registrationtag}</b>
                        </li>
                        <li className="list-group-item">
                          Mileage:
                          &nbsp;
                          <b>{vehicle.mileage}</b>
                        </li>
                        <li className="list-group-item">
                          Last Serviced Date:
                          &nbsp;
                          <b>{vehicle.lastserviced}</b>
                        </li>
                        <li className="list-group-item">
                          Vehicle Condition:
                          &nbsp;
                          <b>{vehicle.vehiclecondition}</b>
                        </li>
                        <li className="list-group-item">
                          Rental Location:
                          &nbsp;
                          <b>{vehicle.rentallocation}</b>
                        </li>
                      </ul>
                      <br />
                      <span
                        className="ed-edit-icon"
                        tabIndex="0"
                        onClick={() => {
                          setaddDel(false);
                          seteditloc(vehicle);
                        }}
                        onKeyDown={() => {
                          setaddDel(false);
                          seteditloc(vehicle);
                        }}
                        data-toggle="modal"
                        data-target="#myModal"
                        role="button"
                      >
                        &#9998;
                      </span>
                      <span
                        className="ed-del-icon"
                        tabIndex="0"
                        onClick={() => {
                          dispatch(adminAction.deletevehicle(vehicle.id));
                        }}
                        onKeyDown={() => {
                          dispatch(adminAction.deletevehicle(vehicle.id));
                        }}
                        role="button"
                      >
                        &#128465;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Vehicle Type and Cost</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form
                    className="form-signin"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (addDelete) {
                        dispatch(adminAction.addvehicle(e));
                      } else {
                        dispatch(adminAction.editvehicle(e, editvehicle.id));
                      }
                    }}
                  >
                    <div className="form-group row">
                      <div className="col">
                        <select
                          className="form-control"
                          id="vehicletype"
                          placeholder="Vehicle Type"
                          name="vehicletype"
                          defaultValue="DEFAULT"
                          required
                        >
                          <option value="DEFAULT" disabled>
                            {addDelete
                              ? 'Vehicle Type'
                              : editvehicle.vehicletype}
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
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="text"
                          id="vehiclename"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          defaultValue={editvehicle.name}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="number"
                          id="makeyear"
                          className="form-control"
                          placeholder="Make Year"
                          name="makeyear"
                          defaultValue={editvehicle.makeyear}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="modelnumber"
                          placeholder="Model Number"
                          name="modelnumber"
                          defaultValue={editvehicle.modelnumber}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="registrationtag"
                          placeholder="Registration Tag"
                          name="registrationtag"
                          defaultValue={editvehicle.registrationtag}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          id="mileage"
                          placeholder="Mileage"
                          name="mileage"
                          defaultValue={editvehicle.mileage}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="date"
                          className="form-control"
                          id="lastserviced"
                          placeholder="Date of Last Service"
                          name="lastserviced"
                          defaultValue={editvehicle.lastserviced}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="vehiclecondition"
                          placeholder="Vehicle Condition"
                          name="vehiclecondition"
                          defaultValue={editvehicle.vehiclecondition}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <select
                          className="form-control"
                          id="rentallocation"
                          placeholder="Rental Location"
                          name="rentallocation"
                          defaultValue="DEFAULT"
                          required
                        >
                          <option value="DEFAULT" disabled>
                            {addDelete
                              ? 'Rental Location'
                              : editvehicle.rentallocation}
                          </option>
                          {adminLocations.map((location) => (
                            <option key={location.id} value={location.name}>
                              {location.name}
                              , &nbsp;
                              {location.address}
                            </option>
                          ))}
                        </select>
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

export default Vehicle;
