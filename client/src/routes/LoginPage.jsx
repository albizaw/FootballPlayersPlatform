import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import Login from '../components/Login';
import Navbar from '../components/Navbar';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/auth/islogin')
      .then((response) => {
        console.log(response.data);
        if (response.data === true) {
          navigate('/platform');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Login />
    </>
  );
};

export default LoginPage;
