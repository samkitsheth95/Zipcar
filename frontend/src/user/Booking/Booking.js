import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import userAction from '../../store/action/userAction';
import Header from '../../common/Header/Header';
import './Booking.css';

function Booking() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const isAdmin = useSelector((state) => state.authReducer.isAdmin);
  const bookings = useSelector((state) => state.userReducer.booking);
  const bookingUpdate = useSelector((state) => state.userReducer.bookingUpdate);
  // var d = new Date(s)
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  // console.log(bookings);
  useEffect(() => {
    if (loggedIn) dispatch(userAction.getbooking());
  }, [dispatch, loggedIn, bookingUpdate]);
  return (
    <div className="BOOKING">
      <Header />
      {loggedIn && (
        <div className="container">
          <br />
          <div>
            <div className="row">
              {bookings.map((booking) => (
                <div key={booking.id} className="col-sm-4">
                  <div className="card-loca card shadow-sm">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <h4>{booking.vehicle.name}</h4>
                        </li>
                        <li className="list-group-item">
                          Name: &nbsp;
                          <b>{booking.vehicle.vehicletype}</b>
                        </li>
                        <li className="list-group-item">
                          Rental Location: &nbsp;
                          <b>{booking.vehicle.rentallocation}</b>
                        </li>
                        <li className="list-group-item">
                          Booking Status: &nbsp;
                          <b>{booking.status}</b>
                        </li>
                        <li className="list-group-item">
                          From: &nbsp;
                          <b>
                            {new Date(booking.from).toLocaleString(
                              'en-US',
                              options,
                            )}
                          </b>
                        </li>
                        <li className="list-group-item">
                          To: &nbsp;
                          <b>
                            {new Date(booking.to).toLocaleString(
                              'en-US',
                              options,
                            )}
                          </b>
                        </li>
                        {isAdmin && booking.user && (
                          <div>
                            <li className="list-group-item">
                              Booked By(Name): &nbsp;
                              <b>{booking.user.name}</b>
                            </li>
                            <li className="list-group-item">
                              Booked By(Username): &nbsp;
                              <b>{booking.user.username}</b>
                            </li>
                          </div>
                        )}
                      </ul>
                      <div className="button text">
                        &nbsp;
                        {booking.status !== 'Booked' || isAdmin ? (
                          ''
                        ) : (
                          <div>
                            <MdDelete
                              className="md"
                              data-toggle="modal"
                              data-target="#myModal"
                              size={28}
                            />
                            <div
                              className="modal fade"
                              id="myModal"
                              role="dialog"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h4 className="modal-title">
                                      Please confirm your Action
                                    </h4>
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                    >
                                      &times;
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <form
                                      className="form-signin"
                                      onSubmit={(e) => {
                                        e.preventDefault();
                                        dispatch(
                                          userAction.deletebooking(
                                            e,
                                            booking.id,
                                            true,
                                          ),
                                        );
                                      }}
                                    >
                                      <div className="form-group row">
                                        <div className="col">
                                          <p>
                                            Are you sure you want to cancel your
                                            booking ?
                                            {' '}
                                          </p>
                                          <strong>Note:</strong>
                                          <p>
                                            If you cancel within 1 hour of ride
                                            beginning you will be charged
                                          </p>
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <div className="col">
                                          <button
                                            type="submit"
                                            className="btn btn-success"
                                          >
                                            Cancel Booking
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-success ridecomplete"
                              data-toggle="modal"
                              data-target="#myModal3"
                            >
                              Ride complete
                            </button>
                            <div
                              className="modal fade"
                              id="myModal3"
                              role="dialog"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h4 className="modal-title headercomplete">
                                      Please confirm your Action
                                    </h4>
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                    >
                                      &times;
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <form
                                      className="form-signin"
                                      onSubmit={(e) => {
                                        e.preventDefault();
                                        dispatch(
                                          userAction.deletebooking(
                                            e,
                                            booking.id,
                                            false,
                                          ),
                                        );
                                      }}
                                    >
                                      <div className="form-group row">
                                        <div className="col">
                                          <textarea
                                            className="form-control"
                                            id="Textarea"
                                            rows="3"
                                            placeholder="Feedback"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <div className="col">
                                          <button
                                            type="submit"
                                            className="btn btn-success"
                                          >
                                            Complete Ride
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
                      <br />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
