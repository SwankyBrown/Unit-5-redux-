import { configureStore } from "@reduxjs/toolkit";
import potentialCountiresReducer from "./slices/potentialCountriesSlice"
import displayCountryReducer from "./slices/displayCountrySlice"


export default configureStore({
    reducer: { 
        potentialCountires: potentialCountiresReducer,
        displayCountry: displayCountryReducer, 
    },
})