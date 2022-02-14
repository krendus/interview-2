import { configureStore } from '@reduxjs/toolkit';
import templateReducer from './slice/templateSlice';
import logger from 'redux-logger';
export default configureStore({
  reducer: {
    template: templateReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
