import React, { useState } from 'react'
import './Upload.css'
import {callUpload} from "./API"

function UploadIndex() {
  const [imgUrl,setImgUrl] = useState("");
  const fileLoad = async (e) => {
    // console.log(e.target.files[0])
    const formData = new FormData();
    const image = e.target.files[0];
    formData.append("image", image);
    formData.append("title", image.name);
    formData.append("album", "OaQ74uy");
    const res = await callUpload(formData);
    console.log("res", res.data.data.link);
    setImgUrl(res.data.data.link);
  }
  console.log(process.env.REACT_APP_TOKEN)
  return (
    <div className="upload-container">
        <label className="label-upload" htmlFor="upload">
            <img src={imgUrl || process.env.PUBLIC_URL + `/imgs/upload.png`}/>
        </label>
        <input className="input-upload" id="upload" type="file"  accept="image/*" onChange={fileLoad}/>
    </div>
  )
}

export default UploadIndex