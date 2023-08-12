import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setData } from "../slices/dataSlice";

// API for get list of all the jobs
export const getDataList = createAsyncThunk(
  "getDataList",
  async (_request, { dispatch }) => {
    axios
      .get(
        _request?.url
          ? _request.url
          : process.env.REACT_APP_API_URL + "jobs/list-jobs/"
      )
      .then(function (response) { // success response
        dispatch(setData(response.data));
      })
      .catch(function (error) { // error in response
        console.log("error", error);
        alert("error found in api.");
      });
  }
);
