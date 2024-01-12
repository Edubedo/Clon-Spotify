import React from 'react';
import CardPersonalizada from './CardPersonalizada';
import CardDashboardSongs from '../../utils/CardDashboardSongs';

function Dashboard() {
  return (
    // PARTE DONDE VA A IR LA CARD PERSONALIZADA
    <div className="">
      <CardPersonalizada />
      <CardDashboardSongs
        arrayInfoSectionRecommendation={{
          img: '',
          title: ''
        }}
        rout={'recently_played'}
        sectionName={'Recently player'}
        alt={'recently_played'}
      />
    </div>
  );
}

export default Dashboard;
