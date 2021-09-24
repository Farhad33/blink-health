import { createSlice } from "@reduxjs/toolkit"

export const selectedDrugSlice = createSlice({
    name: 'drug',
    initialState: {
      rxcui: '',
      name: '',
      synonym: ''
    },
    reducers: {
      selectDrug: (state, action) => {
        state.rxcui = action.payload.rxcui
        state.name = action.payload.name
        state.synonym = action.payload.synonym
      }
    },
})

export default selectedDrugSlice.reducer;
export const { selectDrug } = selectedDrugSlice.actions;