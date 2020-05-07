import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import userAction from '../../store/action/userAction';
import Header from '../../common/Header/Header';
import './Booking.css';

function Booking() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const bookings = useSelector((state) => state.userReducer.booking);
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
  }, [dispatch, loggedIn]);
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
                      </ul>
                      <br />
                      <div className="button text">
                        <span className="md">
                          <MdDelete />
                        </span>
                        &nbsp;
                        <button
                          type="button"
                          className="ridecomplete"
                        >
                          Ride Complete
                        </button>
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
