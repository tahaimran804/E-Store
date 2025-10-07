'use client';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';

const Error = ({ error, reset }) => {
  return (
    <html lang='en'>
      <body>
        <Header />
        <div className='flex flex-col items-center justify-center h-screen text-center p-6 bg-gray-50'>
          <h1 className='text-3xl font-bold text-red-600 mb-4'>
            Application Error
          </h1>
          <p className='text-gray-700 mb-4'>
            Something went wrong while processing your request.
          </p>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default Error;
