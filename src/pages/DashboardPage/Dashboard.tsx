import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { UserTable } from '../../components';
import { User, UserState } from '../../models';
import { setUsers } from '../../redux/states/people';
import './Dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // make an initial http request
    const requestAPI = async() => {
      const usersAPI = await axios.get<User[]>('http://localhost:8080/users').then((response) => response.data)
      // dispatch redux action to update app susers state
      dispatch(setUsers(usersAPI));
    }
    
    requestAPI();
  }, [])
  
  return (
    <div className="global-container">
      <UserTable />
    </div>
  )
}

export default Dashboard
