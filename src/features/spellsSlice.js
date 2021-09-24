import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { networkRequest } from '../API'


export const getSpells = createAsyncThunk("spelling/get", async (spelling) => {
  let endpoint = `/spellingsuggestions.json?name=${spelling}`
  const res = await networkRequest.get(endpoint)
  return res.data
})

export const spellsSlice = createSlice({
  name: "spells",
  initialState: {
    spells: [],
    pending: false,
    error: false,
    msg: ''
  },
  reducers: {},
  extraReducers: {
    [getSpells.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getSpells.fulfilled]: (state, action) => {
        if(action.payload.suggestionGroup.suggestionList) {
          state.spells = action.payload.suggestionGroup.suggestionList.suggestion
          state.msg = ''
        } else {
          state.msg = 'Nothing could be found for that term.'
        }
        state.pending = false
    },
    [getSpells.rejected]: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export default spellsSlice.reducer