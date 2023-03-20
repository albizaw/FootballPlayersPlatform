import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import NavbarPlatform from '../components/Platform/NavbarPlatform';
import Platform from '../components/Platform/Platform';
import { TailSpin } from 'react-loader-spinner';

const PlatformPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    file: '',
  });

  useEffect(() => {
    axios
      .get('/users/me')
      .then((response) => {
        setUser({
          username: response.data.username,
          file: response.data.file,
        });

        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="duration-1000 ease-in">
          <NavbarPlatform file={user.file} username={user.username} />
          <Platform />
        </div>
      ) : (
        <div className="bg-slate-200 w-screen h-screen flex justify-center items-center mx-auto">
          <TailSpin
            height="100"
            width="100"
            color="#DC4321"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default PlatformPage;
