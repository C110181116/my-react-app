import React, { useState ,useEffect } from 'react'
import './Upload.css'
import {callUpload ,getAlbum} from "./API"
import ImgList from './ImgList';

function UploadIndex() {
  const [albumData,setAlbumData] = useState([]);

  useEffect(async () => {
    const album = await getAlbum("OaQ74uy")
    setAlbumData(album.data.data.images)
  })

  const [imgUrl,setImgUrl] = useState("");
  const fileLoad = async (e) => {
    const formData = new FormData();
    const image = e.target.files[0];
    formData.append("image", image);
    formData.append("title", image.name);
    formData.append("album", "OaQ74uy");
    const res = await callUpload(formData);
    // console.log("res", res);
    setImgUrl(res.data.data.link);
  }

  // console.log(process.env.REACT_APP_TOKEN)
  return (
    <div className="upload-container">
        <label className="label-upload" htmlFor="upload">
            <img className="upload-img" src={imgUrl || process.env.PUBLIC_URL + `/imgs/upload.png`}/>
        </label>
        <input
          className="input-upload"
          id="upload" type="file"
          accept="image/*"
          onChange={fileLoad}
        />
        <ImgList albumData={albumData} setImgUrl={setImgUrl}/>
    </div>
  )
}

export default UploadIndex