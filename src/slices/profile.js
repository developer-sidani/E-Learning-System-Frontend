import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {

  },
  reducers: {
    set: (state, action) => ({ doneNeededRefresh: state.doneNeededRefresh, ...action.payload }),
    updateProfile: (state, action) => ({ ...state, ...action.payload }),
  },
})

// Action creators are generated for each case reducer function
export const { set, updateProfile } = profileSlice.actions

export default profileSlice.reducer
