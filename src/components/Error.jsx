import React from 'react';

const Error = ({msg}) => {
  return (
    <div className='bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
        <p>{msg}</p>
    </div>
  );
};

export default Error;
