import React from 'react';
import CardPersonalizada from './CardPersonalizada';
import CardRecommendations from './CardRecommendations';

function Dashboard() {
 
  return (
    // PARTE DONDE VA A IR LA CARD PERSONALIZADA
    <div className="w-[100%] overflow-y-auto">
      <CardPersonalizada/>
      <CardRecommendations/>
    </div>
  );
}


export default Dashboard;
