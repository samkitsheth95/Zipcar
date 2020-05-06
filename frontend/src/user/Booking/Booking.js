import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userAction from '../../store/action/userAction';
import Header from '../../common/Header/Header';
import './Booking.css';

function Booking() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const booking = useSelector((state) => state.userReducer.booking);
  console.log(booking);
  useEffect(() => {
    if (loggedIn) dispatch(userAction.getbooking());
  }, [dispatch, loggedIn]);
  return (
    <div>
      <Header />
      {loggedIn && (
      <h1>asd</h1>)}
    </div>
  );
}

export default Booking;
