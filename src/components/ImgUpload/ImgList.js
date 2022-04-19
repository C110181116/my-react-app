import React from 'react'
import './Upload.css'

function ImgList({albumData,setImgUrl}) {
    const imghandler = (e) => {
        setImgUrl(e.target.src)
    }
  return (
    <div className="img-list">
        {albumData.map(album => (
            <img src={album.link} key={album.id} onClick={imghandler}/>
        ))}
    </div>
  )
}

export default ImgList