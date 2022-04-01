import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { storage } from '../lib'

const TestPage = () => {
  const [file, setFile] = useState()
  const [url, setUrl] = useState('')
  const [progress, setProgress] = useState(0)
  console.log(file)
  const handleFileChange = e => e.target.files[0] ? setFile(e.target.files[0]) : null
  const handleUpload = () => {
    const uploadTask = storage.ref(`temp/${file.name}`).put(file)
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
          .child(file.name)
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
      {url}
      <br />
      <div className="b-2">
        <ReactPlayer controls="true" url={url || 'https://www.youtube.com/watch?v=yOe4_kdqsmU'} />
      </div>
    </div>
  )
}

export default TestPage
