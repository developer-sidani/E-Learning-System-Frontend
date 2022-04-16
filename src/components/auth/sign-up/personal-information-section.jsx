import React from 'react'
import PhoneInput from 'react-phone-input-2'
import {
  FormControl,
  FormHelperText,
  Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material'
import { countryList } from '../../../utils'
import 'react-phone-input-2/lib/material.css'
import { DatePickerComponent } from '../../date-picker'

const countries = countryList.map(({ Name }) => Name)
const PersonalInformationSection = ({
  touched, errors, handleChange, values, setFieldValue, handleBlur,
}) => (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>

        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextField
                onBlur={handleBlur}
                error={Boolean(touched.firstname && errors.firstname)}
                fullWidth
                helperText={touched.firstname && errors.firstname}
                label="First name"
                name="firstname"
                onChange={handleChange}
                required
                value={values.firstname}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextField
                onBlur={handleBlur}
                error={Boolean(touched.lastname && errors.lastname)}
                fullWidth
                helperText={touched.lastname && errors.lastname}
                label="Last name"
                name="lastname"
                onChange={handleChange}
                required
                value={values.lastname}
              />
            </div>

            {/* email and country */}
            <div className="col-span-6 sm:col-span-3">
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                onBlur={handleBlur}
              />

            </div>

            <div className="col-span-6 -mt-1 sm:col-span-3">
              <FormControl required fullWidth>
                <InputLabel id="demo-simple-select-required-label">Gender</InputLabel>
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

            <div className="col-span-6 sm:col-span-3">
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                required
                value={values.password}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <TextField
                onBlur={handleBlur}
                error={Boolean(touched.confirm_password && errors.confirm_password)}
                fullWidth
                helperText={touched.confirm_password && errors.confirm_password}
                label="Confirm Password"
                type="password"
                name="confirm_password"
                onChange={handleChange}
                required
                value={values.confirm_password}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <FormControl required fullWidth>
                <InputLabel id="demo-simple-select-required-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  error={Boolean(touched.country && errors.country)}
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                  onBlur={handleBlur}
                >
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country}>{country}</MenuItem>
                  ))}
                </Select>
                <FormHelperText color="#3DDB77">{touched.country && errors.country}</FormHelperText>
              </FormControl>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <TextField
                onBlur={handleBlur}
                error={Boolean(touched.address && errors.address)}
                fullWidth
                helperText={touched.address && errors.address}
                label="Address"
                name="address"
                onChange={handleChange}
                required
                value={values.address}
              />
            </div>

          </div>
          {/* PHONE NUMBER */}
          <Grid
            container
            spacing={3}
            mt={2}
          >
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
            >
              <>
                <PhoneInput
                  country="lb"
                  autoFormat={false}
                  inputProps={{
                    name: 'phone',
                    autoFocus: false,
                  }}
                  value={values.phone}
                  onChange={(phoneNumber, country, e) => {
                    handleChange(e)
                  }}
                  inputStyle={{ width: '100%' }}
                  containerStyle={{ width: '100%' }}
                />
                {(errors.phone) && touched.phone ? (
                  <div className="mt-2 text-pink-600 text-sm">
                    {errors.phone}
                  </div>
                ) : null}
              </>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
            >
              <DatePickerComponent
                label="Birthday"
                date={values.birthday}
                setDate={setFieldValue}
                name="birthday"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
)

export default PersonalInformationSection
