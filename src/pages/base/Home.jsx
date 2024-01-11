import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
function Home() {
  Navigate({ to: '/dashboard' });

  return <div></div>;
}

export default Home;
