import React from 'react';
import CardPersonalizada from './CardPersonalizada';
import CardRecommendations from './CardRecommendations';
import CardDashboardSongs from '../../utils/CardDashboardSongs';

function Dashboard() {
 
  return (
    // PARTE DONDE VA A IR LA CARD PERSONALIZADA
    <div className="">
      <CardPersonalizada/>
      <CardDashboardSongs/>
      <CardDashboardSongs/>
      <CardDashboardSongs/>
      <CardDashboardSongs/>
      <CardDashboardSongs/>
      <CardDashboardSongs/>
      <CardDashboardSongs/>
    </div>
  );
}


export default Dashboard;
