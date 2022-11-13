import React, { FC, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../store/AppProvider';
import { getParamURL } from '../../utils/Helper';
import GO_BIKE_LOGO from '../../assets/images/go-bike-logo.jpg';
import Image from '../../components/Image/Image.comp';

export interface IProps {}

const Home: FC<IProps> = () => {
  const context = useContext(AppContext);

  // useEffect(() => {
  // ?appid=gobike&redirect=100
  //   console.log(getParamURL('appid'), getParamURL('redirect'));
  // }, []);

  const handleSignOut = () => {
    // TODO: Clear Session
    console.log('SignOut');
  };

  return (
    <section className="bg-white dark:bg-gray-900 p-4 box-border h-screen">
      <div className="flex flex-col content-center items-center justify-center max-w-lg mx-auto h-full min-h-full">
        <div className="flex-1">
          <Image className="mt-4" src={GO_BIKE_LOGO} alt="Logo GoBike" />
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
            Welcome, GoBike App
          </h2>

          <p className="mt-5 text-gray-500 dark:text-gray-300">
            GoBike is indonesian best electric scooter rental service app with a
            clear mission:
          </p>
          <p className="mt-3 text-gray-500 dark:text-gray-300">
            to revolutionise a mobility sector plagued with pollution,
            congestion, and rising fuel prices, with electric rental bikes.
          </p>
          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Goto provides sanitised scooters and ebike for rent in Bangalore,
            Hyderabad and Mumbai.
          </p>
        </div>
        <div className="control-bottom w-full">
          <button
            type="button"
            onClick={handleSignOut}
            className="block w-full px-5 py-2 text-white bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
