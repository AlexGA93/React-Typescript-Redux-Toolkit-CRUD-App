import axios from 'axios';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { UserTable } from '../../components';
import { getUsers } from '../../redux/states/people';
// import { setUsers } from '../../redux/states/people';
import { useAppDispatch } from '../../redux/store';
import './Dashboard.scss';

const Dashboard = () => {
  
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [])
  
  return (
    <div className="global-container">
      <UserTable />
    </div>
  )
}

export default Dashboard
