import { configureStore } from "@reduxjs/toolkit";

import pageReducer from "../features/pageSlices/pageSlices";
import dataReducer from "../features/dataSlices/dataSlices";

export default configureStore({
  reducer: {
    page: pageReducer,
    data: dataReducer,
  },
});
