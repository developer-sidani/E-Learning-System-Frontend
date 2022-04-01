import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { uuid } from 'uuidv4'
import { storage } from '../lib'

const TestPage = () => {
  const [file, setFile] = useState()
  const [url, setUrl] = useState('')
  const [progress, setProgress] = useState(0)
  const specialId = uuid()
  const handleFileChange = e => e.target.files[0] ? setFile(e.target.files[0]) : null
  const handleUpload = () => {
    const uploadTask = storage.ref(`temp/${specialId}-${file.name}`).put(file)
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )
        setProgress(progress)
      },
      error => {
        console.log(error)
      },
      () => {
        storage
          .ref('temp')
          .child(`${specialId}-${file.name}`)
          .getDownloadURL()
          .then(url => {
            setUrl(url)
          })
      },
    )
  }

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload}>Upload</button>
      <br />
      <button type="button" onClick={() => setUrl('')}>Remove</button>
      <br />
      <h1>{progress}</h1>
      {url}
      <br />
      <div className="b-2">
        <ReactPlayer
          controls
          config={{ file: { attributes: { controlsList: 'nodownload' /* controlsList: 'nodownload' || 'download' */ } } }}
          url={url || 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/temp%2Fistockphoto-1015455894-640_adpp_is.mp4?alt=media&token=5c1edc1b-770d-4176-840b-ffa1091356bd'}
        />
      </div>
    </div>
  )
}

export default TestPage
