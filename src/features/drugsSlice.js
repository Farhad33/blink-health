import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { networkRequest } from '../API'


export const getDrugs = createAsyncThunk("drugs/get", async (searchData) => {
  let endpoint = `/drugs.json?name=${searchData}`
  const res = await networkRequest.get(endpoint)
  return res.data
})

export const drugsSlice = createSlice({
  name: "drugs",
  initialState: {
    drugs: [],
    name: '',
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getDrugs.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getDrugs.fulfilled]: (state, action) => {
      state.name = action.payload.drugGroup.name
      if(action.payload.drugGroup.conceptGroup) {
        let arr = []
        action.payload.drugGroup.conceptGroup.forEach(item => arr.push(...item.conceptProperties))
        state.drugs = arr
      }
      state.pending = false
    },
    [getDrugs.rejected]: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export default drugsSlice.reducer