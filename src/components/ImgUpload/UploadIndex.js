import React from 'react'
import './Upload.css'

function UploadIndex() {
  const fileLoad = (e) => {
    // console.log(e.target.files[0])
    const formData = new FormData();
    const image = e.target.files[0];
    formData.append("image" , image);
    formData.append("title" ,image.name);
    console.log(formData)
  }

  return (
    <div className="upload-container">
        <label className="label-upload" htmlFor="upload">
            <img src={process.env.PUBLIC_URL + `/imgs/upload.png`}/>
        </label>
        <input className="input-upload" id="upload" type="file"  accept="image/*" onChange={fileLoad}/>
    </div>
  )
}

export default UploadIndex