import { configureStore } from '@reduxjs/toolkit'
import drugsReducer from './features/drugsSlice'
import selectedDrugReducer from './features/selectedDrugSlice'
import ndcReducer from './features/ndcListSlice'
import spellsReducer from './features/spellsSlice'

export const store = configureStore({
  reducer: {
    drugs: drugsReducer,
    selectedDrug: selectedDrugReducer,
    ndcList: ndcReducer,
    spells: spellsReducer
  }
})