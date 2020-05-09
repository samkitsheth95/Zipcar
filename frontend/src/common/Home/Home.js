import React from 'react';
import Header from '../Header/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <img
          className="mb"
          alt=""
          src="zipcar_name.png"
          width="100%"
        />
      </div>
    </div>
  );
}

export default Home;
