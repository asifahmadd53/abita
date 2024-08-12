import React, { useState, useEffect } from 'react';
import { video1 } from '../../assets';

const Video = ({ img, video }) => {
  const [isHover, setIsHover] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (play) {
        setPlay(false);
      }
    };

    if (play) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [play]);

  return (
    <div className="relative w-full h-80 md:h-96">
      <img
        className="w-full h-full object-cover object-bottom"
        src={img}
        alt="Sofa Set"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative inline-flex">
          <div
            className="w-20 h-20 bg-white hover:bg-[#B18B5E] transition-all ease-in-out duration-500 rounded-full flex items-center justify-center z-10"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={(e) => {
              e.stopPropagation();
              setPlay(true);
            }}
          >
            {isHover ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FFFFFF"
              >
                <path
                  d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000"
              >
                <path
                  d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            )}
          </div>
          <div className="w-20 h-20 bg-white rounded-full absolute top-0 left-0 animate-ping z-0"></div>
          <div className="w-20 h-20 bg-white rounded-full absolute top-0 left-0 animate-pulse z-0"></div>
        </div>
      </div>

      {play && (
        <div
          className="fixed inset-0 flex items-center justify-center z-20 bg-gradient-to-b from-black/60 to-black/60 transition-opacity duration-500 h-screen"
          onClick={() => setPlay(false)}
        >
          <div
            className="w-full md:w-[60%] h-auto m-auto flex items-center justify-center transition-transform duration-500 transform scale-100 lg:pt-24"
            onClick={(e) => e.stopPropagation()}
          >
            <video className="w-full" autoPlay  src={video}></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
