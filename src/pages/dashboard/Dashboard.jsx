import React, { useEffect } from 'react';
import CardPersonalizada from './CardPersonalizada';
import CardDashboardSongs from '../../utils/CardDashboardSongs';
import LikedSongs from '../../assets/images/album/liked_songs.jpg';
import imgGustavoCeratiRadio from '../../assets/images/album/gustavo_cerati_radio.jpg';
import imgBeethoven from '../../assets/images/album/Beethoven.jpg';
import imgGustavoCeratiMix from '../../assets/images/album/gustavo_cerati_mix.jpg';
function Dashboard() {
  // useEffect(() => {
  //   const fetchCallInformationSectionRecomendation = async () => {
  //     try {
  //       let reqInformationSectionRecomendation = await fetch(
  //         process.env.PUBLIC_URL + '/json/informationSectionRecomendation.json'
  //       );
  //       let res = await reqInformationSectionRecomendation.json();
  //       return res;
  //     } catch (error) {
  //       console.error('Error fetching JSON:', error);
  //     }
  //   };

  //   fetchCallInformationSectionRecomendation()
  // }, []);
  return (
    // PARTE DONDE VA A IR LA CARD PERSONALIZADA
    <div className="">
      <CardPersonalizada />
      <CardDashboardSongs
        arrayInfoSectionRecommendation={[
          {
            img: LikedSongs,
            title: 'Liked Songs',
            alt: 'Liked Songs',
            route: 'Liked Songs',
            subtitle: '730 songs'
          },
          {
            img: imgGustavoCeratiRadio,
            title: 'Gustavo Cerati Radio',
            alt: 'Gustavo Cerati Radio',
            route: 'Gustavo Cerati Radio',
            subtitle: 'With Luis Alberto Spinneta, Charly García,...'
          },
          {
            img: imgBeethoven,
            title: 'Oudwig van Beethoven',
            alt: 'Oudwig van Beethoven',
            route: 'Oudwig van Beethoven',
            subtitle: 'Artist'
          },
          {
            img: imgGustavoCeratiMix,
            title: 'Gustavo Cerati Mix',
            alt: 'Gustavo Cerati Mix',
            route: 'Gustavo Cerati Mix',
            subtitle: 'Soda Stereo, El mató a un Policita Motorizado and...'
          }
        ]}
        rout={'recently_played'}
        sectionName={'Recently played'}
        alt={'recently_played'}
      />{' '}
      <CardDashboardSongs
        arrayInfoSectionRecommendation={[
          {
            img: LikedSongs,
            title: 'Liked Songs',
            alt: 'Liked Songs',
            route: 'Liked Songs',
            subtitle: '730 songs'
          },
          {
            img: imgGustavoCeratiRadio,
            title: 'Gustavo Cerati Radio',
            alt: 'Gustavo Cerati Radio',
            route: 'Gustavo Cerati Radio',
            subtitle: 'With Luis Alberto Spinneta, Charly García,...'
          },
          {
            img: imgBeethoven,
            title: 'Oudwig van Beethoven',
            alt: 'Oudwig van Beethoven',
            route: 'Oudwig van Beethoven',
            subtitle: 'Artist'
          },
          {
            img: imgGustavoCeratiMix,
            title: 'Gustavo Cerati Mix',
            alt: 'Gustavo Cerati Mix',
            route: 'Gustavo Cerati Mix',
            subtitle: 'Soda Stereo, El mató a un Policita Motorizado and...'
          }
        ]}
        rout={'recently_played'}
        sectionName={'Recently played'}
        alt={'recently_played'}
      />{' '}
      <CardDashboardSongs
        arrayInfoSectionRecommendation={[
          {
            img: LikedSongs,
            title: 'Liked Songs',
            alt: 'Liked Songs',
            route: 'Liked Songs',
            subtitle: '730 songs'
          },
          {
            img: imgGustavoCeratiRadio,
            title: 'Gustavo Cerati Radio',
            alt: 'Gustavo Cerati Radio',
            route: 'Gustavo Cerati Radio',
            subtitle: 'With Luis Alberto Spinneta, Charly García,...'
          },
          {
            img: imgBeethoven,
            title: 'Oudwig van Beethoven',
            alt: 'Oudwig van Beethoven',
            route: 'Oudwig van Beethoven',
            subtitle: 'Artist'
          },
          {
            img: imgGustavoCeratiMix,
            title: 'Gustavo Cerati Mix',
            alt: 'Gustavo Cerati Mix',
            route: 'Gustavo Cerati Mix',
            subtitle: 'Soda Stereo, El mató a un Policita Motorizado and...'
          }
        ]}
        rout={'recently_played'}
        sectionName={'Recently played'}
        alt={'recently_played'}
      />
      <CardDashboardSongs
        arrayInfoSectionRecommendation={[
          {
            img: LikedSongs,
            title: 'Liked Songs',
            alt: 'Liked Songs',
            route: 'Liked Songs',
            subtitle: '730 songs'
          },
          {
            img: imgGustavoCeratiRadio,
            title: 'Gustavo Cerati Radio',
            alt: 'Gustavo Cerati Radio',
            route: 'Gustavo Cerati Radio',
            subtitle: 'With Luis Alberto Spinneta, Charly García,...'
          },
          {
            img: imgBeethoven,
            title: 'Oudwig van Beethoven',
            alt: 'Oudwig van Beethoven',
            route: 'Oudwig van Beethoven',
            subtitle: 'Artist'
          },
          {
            img: imgGustavoCeratiMix,
            title: 'Gustavo Cerati Mix',
            alt: 'Gustavo Cerati Mix',
            route: 'Gustavo Cerati Mix',
            subtitle: 'Soda Stereo, El mató a un Policita Motorizado and...'
          }
        ]}
        rout={'recently_played'}
        sectionName={'Recently played'}
        alt={'recently_played'}
      />
      <CardDashboardSongs
        arrayInfoSectionRecommendation={[
          {
            img: LikedSongs,
            title: 'Liked Songs',
            alt: 'Liked Songs',
            route: 'Liked Songs',
            subtitle: '730 songs'
          },
          {
            img: imgGustavoCeratiRadio,
            title: 'Gustavo Cerati Radio',
            alt: 'Gustavo Cerati Radio',
            route: 'Gustavo Cerati Radio',
            subtitle: 'With Luis Alberto Spinneta, Charly García,...'
          },
          {
            img: imgBeethoven,
            title: 'Oudwig van Beethoven',
            alt: 'Oudwig van Beethoven',
            route: 'Oudwig van Beethoven',
            subtitle: 'Artist'
          },
          {
            img: imgGustavoCeratiMix,
            title: 'Gustavo Cerati Mix',
            alt: 'Gustavo Cerati Mix',
            route: 'Gustavo Cerati Mix',
            subtitle: 'Soda Stereo, El mató a un Policita Motorizado and...'
          }
        ]}
        rout={'recently_played'}
        sectionName={'Recently played'}
        alt={'recently_played'}
      />
    </div>
  );
}

export default Dashboard;
