import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import { TextField } from '@mui/material'
import AdapterDateMoment from '@mui/lab/AdapterMoment'

const DatePickerComponent = ({
  date, setDate, label, name,
}) => (
  <LocalizationProvider dateAdapter={AdapterDateMoment}>
    <DatePicker
      name={name}
      onChange={(val) => setDate(name, Date.parse(val))}
      label={label}
      renderInput={(inputProps) => (
        <TextField
          fullWidth
          {...inputProps}
        />
      )}
      value={date}
    />
  </LocalizationProvider>
)

export default DatePickerComponent
