import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

// import components
import Navbar from '../components/Navbar';
import View from '../components/View';

const Homepage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get('/auth/islogin')
  //     .then((response) => {
  //       console.log(response.data);
  //       if (response.data === true) {
  //         navigate('/platform');
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <View />
    </>
  );
};

export default Homepage;
