import React, { useEffect } from 'react'
import {
  Box, LinearProgress, TextField, Typography,
} from '@mui/material'
import { UploadFile } from '../../../hooks'

const ProfileSection = ({
  values, errors, handleChange, touched, handleBlur, setPhotoUrl,
}) => {
  const [file, handleUpload] = UploadFile({
    location: 'images/users/students',
    fileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
    fileSize: 2,
    errorMessages: {
      fileType: 'Please select an image file (png or jpg)',
      fileSize: 'File Should Not Exceed 2MB',
    },
  })
  useEffect(() => {
    setPhotoUrl(file.url)
  }, [file])

  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
          <p className="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <div className="mt-1 flex rounded-md shadow-sm">
                <TextField
                  onBlur={handleBlur}
                  error={Boolean(touched.user && errors.user)}
                  fullWidth
                  helperText={touched.user && errors.user}
                  label="Username"
                  name="user"
                  onChange={handleChange}
                  required
                  value={values.user}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-6 mt-6">
            <label htmlFor="photo" className="block text-sm font-medium text-blue-gray-900">
              Photo
            </label>
            <div className="mt-1 flex items-center">
              <img
                className="inline-block h-20 w-20 rounded-full"
                src={file.url.length > 0 ? file.url : 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Fuser.png?alt=media&token=11e4daf6-bffa-4e1d-8359-260f96c87514'}
                alt=""
              />
              <div className="ml-4 flex">
                <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                  <label
                    htmlFor="user-photo"
                    className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
                  >
                    <span>Change</span>
                    <span className="sr-only"> user photo</span>
                  </label>
                  <input
                    onChange={handleUpload}
                    id="user-photo"
                    name="user-photo"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                  />
                </div>
                {file.url.length > 0 && (
                  <button
                    type="button"
                    onClick={() => file.setUrl('')}
                    className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
            {file.error && (
              <div className="mt-2 text-pink-600 text-sm">
                {file.error}
              </div>
            )}
            {file.active && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '50%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={file.progress} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    {`${Math.round(
                      file.progress,
                    )}%`}
                  </Typography>
                </Box>
              </Box>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
