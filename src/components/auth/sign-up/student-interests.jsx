import React from 'react'
import {
  FormControl, FormHelperText, InputLabel, MenuItem, Select,
} from '@mui/material'

const StudentInterests = ({
  touched, errors, handleChange, values, handleBlur,
}) => (
  <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Interests</h3>
        <p className="mt-1 text-sm text-gray-500">Select Your interests</p>

      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 -mt-1 sm:col-span-3">
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-required-label">Interests</InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                error={Boolean(touched.gender && errors.gender)}
                fullWidth
                label="Gender"
                placeholder="Gender"
                aria-placeholder="gender"
                name="gender"
                onChange={handleChange}
                required
                value={values.gender}
                onBlur={handleBlur}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
              <FormHelperText color="#3DDB77">{touched.gender && errors.gender}</FormHelperText>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default StudentInterests
