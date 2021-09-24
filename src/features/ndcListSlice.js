import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { networkRequest } from '../API'


export const getNdcList = createAsyncThunk("ndc/get", async (id) => {
  let endpoint = `/rxcui/${id}/ndcs.json`
  const res = await networkRequest.get(endpoint)
  return res.data
})

export const ndcSlice = createSlice({
  name: "ndc",
  initialState: {
    ndc: [],
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getNdcList.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getNdcList.fulfilled]: (state, action) => {
      if(action.payload?.ndcGroup?.ndcList?.ndc) {
        state.ndc = action.payload.ndcGroup.ndcList.ndc
      } else {
        state.ndc = []
      }
      state.pending = false
    },
    [getNdcList.rejected]: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export default ndcSlice.reducer