import React, { useCallback, useEffect, useState } from 'react'
import {
  CircularProgress,
  TextField,
  Autocomplete,
} from '@mui/material'
import { getCategories } from '../../../api'

const StudentInterests = ({
  touched, errors, handleChange, values, handleBlur, setFieldValue,
}) => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const getCategoriesCallback = useCallback(
    async () => {
      setLoading(true)
      try {
        const res = await getCategories()
        setCategories(res?.res?.data) // added .reverse() to fix order
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  useEffect(() => {
    getCategoriesCallback()
  }, [])
  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Interests</h3>
          <p className="mt-1 text-sm text-gray-500">Select Your interests</p>

        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 -mt-1 sm:col-span-12">
              <Autocomplete
                id="free-solo-2-demo"
                disableClearable
                options={categories}
                fullWidth
                autoComplete={false}
                multiple
                filterSelectedOptions
                getOptionLabel={({ name }) => name}
                name="interests"
                onChange={(event, value) => {
                  setFieldValue('interests', value
                    .map(option => option.id))
                }}
                loading={loading}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={Boolean(touched.interests && errors.interests)}
                    helperText={touched.interests && errors.interests}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="interests"
                    label="Search Categories"
                    margin="normal"
                    value={values?.interests}
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                      endAdornment: (
                        <>
                          {loading ? <CircularProgress color="inherit" size={20} /> : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentInterests
