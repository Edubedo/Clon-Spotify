import React from 'react'

function Notification({img, alt, title, artist, description, type, uploadDate, duration}) {
  return (
    <div>
        <div>
            <img src={img} alt={alt} />
            <div>
                <h4>{title}</h4>
                <h5>{artist}</h5>
            </div>
        </div>
        <p>{description}</p>
        <div> 
            <span>{type}</span>
            <span>{uploadDate}</span>
            <span>{duration}</span>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Notification