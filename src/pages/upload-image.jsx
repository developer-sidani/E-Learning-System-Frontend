import React from 'react'
import ReactPlayer from 'react-player'
import { UploadFile } from '../hooks'

const TestPage = () => {
  const [file, handleUpload] = UploadFile({
    location: 'temp',
    fileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
    fileSize: 1,
    errorMessages: {
      fileType: 'Please select an image file (png or jpg)',
      fileSize: 'File Should Not Exceed 1MB',
    },
  })

  return (
    <div>
      <progress value={file.progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleUpload} />
      <br />
      <button type="button" onClick={() => file.setUrl('')}>Remove</button>
      <br />
      <h1>
        {file.progress}
        %
      </h1>
      {file.url}
      <br />
      <h1>{file.error}</h1>
      <div className="b-2">
        <ReactPlayer
          controls
          config={{ file: { attributes: { controlsList: 'nodownload' /* controlsList: 'nodownload' || 'download' */ } } }}
          url={file.url || 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/temp%2Fistockphoto-1015455894-640_adpp_is.mp4?alt=media&token=5c1edc1b-770d-4176-840b-ffa1091356bd'}
        />
      </div>
    </div>
  )
}

export default TestPage
