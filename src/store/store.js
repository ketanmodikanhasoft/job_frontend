import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import dataReducer from "./slices/dataSlice";

// combine all reducers here
const rootReducer = combineReducers({
  dataReducer,
});

// export store with all reducer data
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
