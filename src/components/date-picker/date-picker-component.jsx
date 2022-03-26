import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import { TextField } from '@mui/material'
import AdapterDateMoment from '@mui/lab/AdapterMoment'
import moment from 'moment'

const DatePickerComponent = ({
  date, setDate, label, name,
}) => (
  <LocalizationProvider dateAdapter={AdapterDateMoment}>
    <DatePicker
      name={name}
      onChange={(val) => setDate(name, Date.parse(val))}
      label={label}
      maxDate={moment().subtract(10, 'years')}
      renderInput={(inputProps) => (
        <TextField
          required
          fullWidth
          {...inputProps}
        />
      )}
      value={date}
    />
  </LocalizationProvider>
)

export default DatePickerComponent
