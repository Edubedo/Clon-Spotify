import React from 'react';
import BotonesHeader from '../../dashboard/BotonesHeader';
import Notification from './components/Notification';
import LexFriendman from '../../../assets/images/logos/lex_friedman.jpg'
function Notifications() {
  return (
    <>
      <div className="bg-[#121212] text-white p-5">
        <div>
          <BotonesHeader />
          <h1 className="text-[2.4rem] font-bold">What's New</h1>
          <p className="mb-3 text-gray-400">
            The latest releases from artist, podcasts, and show you follow
          </p>
          <div className="flex gap-3 ">
            <button className="p-2 bg-[#232323]  rounded-r-[20px] rounded-l-[20px]">
              Music
            </button>
            <button className="p-2 bg-[#232323]  rounded-r-[20px] rounded-l-[20px]">
              Podcast & Shows
            </button>
          </div>
          <div>
          <h3 className="text-[1.6rem] font-bold mt-5">Earlier</h3>
          <Notification img={LexFriendman} alt={"Episodio 407 lex fridman"} title={"Guillaume Verdon: Beff Jezos, E/acc Movement, Physics, Computation & AGI | Lex Fridman Podcast #407"} artist={"Lex Fridman"} description={"Guillaume Verdon (aka Beff Jezos on Twitter) is a physicist, quantum computing researcher, and founder of e/acc (effective accelerationism) movement."} type={"Episode"} uploadDate={"1 week ago"} duration={"2hr 53 min"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
