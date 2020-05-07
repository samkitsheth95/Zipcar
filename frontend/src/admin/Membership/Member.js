import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import adminAction from '../../store/action/adminActions';
import Header from '../../common/Header/Header';
import './Member.css';

function Member() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const isAdmin = useSelector((state) => state.authReducer.isAdmin);
  const members = useSelector((state) => state.adminReducer.member);
  const memberUpdate = useSelector((state) => state.adminReducer.memberUpdate);
  useEffect(() => {
    dispatch(adminAction.getmembers());
  }, [dispatch, memberUpdate]);
  return (
    <div className="MEMBER">
      <Header />
      {loggedIn && isAdmin && (
        <div className="container">
          <br />
          {members.map((member) => (
            <ul className="list-group" key={member.id}>
              <li className="list-group-item">
                Name:
                <strong>{member.name}</strong>
                &nbsp; &nbsp; User Name:
                <strong>{member.username}</strong>
                &nbsp; &nbsp;
                Membership Status:
                {member.memberstatus ? (
                  <strong>Active</strong>
                ) : (
                  <strong>Inactive</strong>
                )}
                {member.memberstatus ? (
                  <button onClick={() => { dispatch(adminAction.changemember(member.id, !member.memberstatus)); }} type="button" className="btn btn-danger">
                    Deactivate Membership
                  </button>
                ) : (
                  <button onClick={() => { dispatch(adminAction.changemember(member.id, !member.memberstatus)); }} type="button" className="btn btn-success text-right">
                    Activate Membership
                  </button>
                )}
              </li>
            </ul>
          ))}
        </div>
      )}
      ;
    </div>
  );
}

export default Member;
