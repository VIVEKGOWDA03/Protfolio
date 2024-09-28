import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../Slice/Slice';

const store = configureStore({
  reducer:{
    toggle:toggleReducer,
  },
});

export default store;  
