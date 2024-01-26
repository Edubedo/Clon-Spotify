import React from 'react'
import imgTheDoors from '../../../../assets/images/album/theDoors2.jpg'
function Cancion() {
  return (
    <div className='p-4'>
      <h4 className='pb-5 font-semibold text-[20px]'>The doors - Exitos</h4>
      <img src={imgTheDoors} alt="Img album the doors" className='rounded-[5px]' />
    </div>
  )
}

export default Cancion