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
          <div className="row">
            {members.map((member) => (
              <div key={member.id} className="col-sm-4">
                <div className="card-loca card shadow-sm">
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <h4>{member.username}</h4>
                      </li>
                      <li className="list-group-item">
                        Name: &nbsp;
                        <b>{member.name}</b>
                      </li>
                      <li className="list-group-item">
                        Membership Status: &nbsp;
                        <b>
                          {member.memberstatus ? (
                            <strong>Active</strong>
                          ) : (
                            <strong>Inactive</strong>
                          )}
                        </b>
                      </li>
                      <li className="list-group-item">
                        {member.memberstatus ? (
                          <button
                            onClick={() => {
                              dispatch(
                                adminAction.changemember(
                                  member.id,
                                  !member.memberstatus,
                                ),
                              );
                            }}
                            type="button"
                            className="btn btn-danger text"
                          >
                            Deactivate Membership
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              dispatch(
                                adminAction.changemember(
                                  member.id,
                                  !member.memberstatus,
                                ),
                              );
                            }}
                            type="button"
                            className="btn btn-success"
                          >
                            Activate Membership
                          </button>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      ;
    </div>
  );
}

export default Member;
