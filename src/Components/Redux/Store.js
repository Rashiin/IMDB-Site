import { configureStore } from '@reduxjs/toolkit';
import { celebritiesSlice } from './Famous/Famous';

export const store = configureStore({
  reducer: {
    celebrities: celebritiesSlice.reducer,
  },
});

export default store;
