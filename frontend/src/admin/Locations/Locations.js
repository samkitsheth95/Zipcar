import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import adminAction from '../../store/action/adminActions';
import Header from '../../common/Header/Header';

function Locations() {
  const adminLocations = useSelector((state) => state.adminReducer.location);
  const isaddLocations = useSelector(
    (state) => state.adminReducer.locationUpdate,
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
          <div className="button">
            <button
              type="button"
              className="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#myModal"
            >
              Add
            </button>
          </div>
          <div>
            {adminLocations.map((location, index) => (
              <div key={location.id} className="card">
                <div className="card-body">
                  <b>
                    {index + 1}
                    )
                  </b>
                  &nbsp;&nbsp; Name:&nbsp;&nbsp;
                  <b>{location.name}</b>
                  {' '}
                  Address:&nbsp;&nbsp;
                  <b>{location.address}</b>
                  {' '}
                  Capacity:&nbsp;&nbsp;
                  <b>{location.capacity}</b>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-info btn-lg"
                    onClick={() => {
                      dispatch(adminAction.deletelocation(location.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
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
                          placeholder="Location Name"
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
