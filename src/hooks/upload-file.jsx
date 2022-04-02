import { useCallback, useState } from 'react'
import uuid from 'react-uuid'
import { storage } from '../lib'

const UploadFile = ({
  fileTypes, location, fileSize, errorMessages,
}) => {
  const [url, setUrl] = useState('')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const specialId = uuid()
  const handleUpload = useCallback((e) => {
    const selectedFile = e.target.files[0]

    if (selectedFile) {
      if (fileTypes.includes(selectedFile.type)) {
        if (selectedFile.size / 1024 / 1024 > fileSize) {
          setError(errorMessages.fileSize)
        } else {
          setError(null)
          const uploadTask = storage.ref(`${location}/${specialId}-${selectedFile.name}`).put(selectedFile)
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
                .ref(location)
                .child(`${specialId}-${selectedFile.name}`)
                .getDownloadURL()
                .then(url => {
                  setUrl(url)
                })
            },
          )
        }
      } else {
        setError(errorMessages.fileType)
      }
    }
  }, [errorMessages.fileSize, errorMessages.fileType, fileSize, fileTypes, location, specialId])
  return [{
    url, setUrl, progress, error,
  }, handleUpload]
}

export default UploadFile
