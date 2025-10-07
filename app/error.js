'use client';
import React from 'react';

const Error = ({ error, reset }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center p-6'>
      <h1 className='text-3xl font-bold text-red-600 mb-4'>
        Oops! Something went wrong 😢
      </h1>
      <p className='text-gray-700 mb-6'>
        {'An unexpected error occurred. Please try again.'}
      </p>
    </div>
  );
};

export default Error;
