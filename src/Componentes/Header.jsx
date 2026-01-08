import React from 'react';

const Header = ({ rating, image }) => {
  console.log(rating);
  return (
    <div className="relative p-3">
      <div className="absolute top-0 right-0 mt-3 mr-3 bg-purple-500 p-1 border-round text-white flex align-items-center">
        <i className="pi pi-star-fill mr-1" style={{ fontSize: '0.7rem' }}></i>
        {rating.rate}
      </div>
      <img
        src={image}
        alt=""
        className="bg-contain bg-center bg-no-repeat border-round h-20rem w-full "
        style={{ objectFit: 'contain' }}
      ></img>
    </div>
  );
};

export default Header;
