import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import adminAction from '../../store/action/adminActions';
import Header from '../../common/Header/Header';
import './Vehicle.css';

function Vehicle() {
  const adminVehicletype = useSelector((state) => state.adminReducer.vehicletype);
  const isaddVehicletype = useSelector(
    (state) => state.adminReducer.vehicletypeUpdate,
  );
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const isAdmin = useSelector((state) => state.authReducer.isAdmin);
  const [addDelete, setaddDel] = useState(0);
  const [editvehicletype, seteditloc] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminAction.getvehicletype());
  }, [dispatch, isaddVehicletype]);

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
              onClick={() => { setaddDel(true); seteditloc({}); }}
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Vehicle Type
            </button>
          </div>
          <br />
          <div>
            <div className="row">
              {adminVehicletype.map((vehicletype) => (
                <div key={vehicletype.id} className="col-sm-4">
                  <div className="card-loca card shadow-sm">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <b>{vehicletype.vehicletype}</b>
                        </li>
                        <li className="list-group-item">
                          Hourly Cost:
                          <b>{vehicletype.hourlycost}</b>
                        </li>
                        <li className="list-group-item">
                          Rate for 1-5 hrs:
                          <b>{vehicletype.onetofive}</b>
                        </li>
                        <li className="list-group-item">
                          Rate for 6-10 hrs:
                          <b>{vehicletype.sixtoten}</b>
                        </li>
                        <li className="list-group-item">
                          Rate for 11-15 hrs:
                          <b>{vehicletype.eleventofifteen}</b>
                        </li>
                        <li className="list-group-item">
                          Rate for 16+ hrs:
                          <b>{vehicletype.sixteenplus}</b>
                        </li>
                        <li className="list-group-item">
                          6 Month Member Fee:
                          <b>{vehicletype.sixmonthmemberfee}</b>
                        </li>
                        <li className="list-group-item">
                          Late Fee:
                          <b>{vehicletype.latefee}</b>
                        </li>
                      </ul>
                      <br />
                      <span
                        className="ed-edit-icon"
                        tabIndex="0"
                        onClick={() => { setaddDel(false); seteditloc(vehicletype); }}
                        onKeyDown={() => { setaddDel(false); seteditloc(vehicletype); }}
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
                          dispatch(adminAction.deletevehicletype(vehicletype.id));
                        }}
                        onKeyDown={() => {
                          dispatch(adminAction.deletevehicletype(vehicletype.id));
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
                        dispatch(adminAction.addvehicletype(e));
                      } else {
                        dispatch(adminAction.editvehicletype(e, editvehicletype.id));
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
                          required
                        >
                          <option value="" disabled selected>
                            Vehicle Type
                          </option>
                          <option value="CA">CA</option>
                          <option value="NY">NY</option>
                        </select>
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
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="lastserviced"
                          placeholder="Date of Last Service"
                          name="lastserviced"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          id="vehiclecondition"
                          placeholder="Vehicle Condition"
                          name="vehiclecondition"
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
                          required
                        >
                          <option value="" disabled selected>
                            Rental Location
                          </option>  
                          <option value="CA">CA</option>
                          <option value="NY">NY</option>
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
