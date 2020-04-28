import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import adminAction from '../../store/action/adminActions';
import Header from '../../common/Header/Header';
import './Location.css';

function Locations() {
  const adminLocations = useSelector((state) => state.adminReducer.location);
  const isaddLocations = useSelector(
    (state) => state.adminReducer.locationUpdate
  );
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const isAdmin = useSelector((state) => state.authReducer.isAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminAction.getlocations());
  }, [dispatch, isaddLocations]);

  return (
    <div>
      <Header />
      {loggedIn && isAdmin && (
        <div>
          <br />
          <div className="button text-center">
            <button
              type="button"
              className="btn btn-info btn-lg "
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Location
            </button>
          </div>
          <br />
          <div>
            <div className="row">
              {adminLocations.map((location) => (
                <div key={location.id} className="col-sm-3">
                  <div className="card-loca card">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <b>{location.name}</b>
                        </li>
                        <li className="list-group-item">
                          Address:
                          <b>{location.address}</b>
                        </li>
                        <li className="list-group-item">
                          Capacity:
                          <b>{location.capacity}</b>
                        </li>
                      </ul>
                      <br />
                      <span
                        className="ed-del-icon"
                        tabIndex="0"
                        onClick={() => {
                          dispatch(adminAction.deletelocation(location.id));
                        }}
                        onKeyDown={() => {
                          dispatch(adminAction.deletelocation(location.id));
                        }}
                        role="button"
                      >
                        &#9998;
                      </span>
                      <span
                        className="ed-edit-icon"
                        tabIndex="0"
                        onClick={() => {
                          dispatch(adminAction.deletelocation(location.id));
                        }}
                        onKeyDown={() => {
                          dispatch(adminAction.deletelocation(location.id));
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
                  <h4 className="modal-title">Rental Locations</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form
                    className="form-signin"
                    onSubmit={(e) => {
                      e.preventDefault();
                      dispatch(adminAction.addlocation(e));
                    }}
                  >
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="City Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="text"
                          id="address"
                          className="form-control"
                          placeholder="Location Address"
                          name="address"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          id="capacity"
                          placeholder="Maximum Vehicle Capacity"
                          name="capacity"
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

export default Locations;
