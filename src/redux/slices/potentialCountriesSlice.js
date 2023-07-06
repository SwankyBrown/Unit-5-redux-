import { createSlice } from "@reduxjs/toolkit"

export const potentialCountiresSlice = createSlice({
    name: "potentialCounties",
    initialState: {
        value: [
            {
                name: {
                    common: "This is initialPotential",
                },
            },
        ],
    },
    reducers: {
        setPotentialCountries: (state, action) => {
            state.value = action.payload;
        },
        deletePotentialCountries: (state) => {
            state.value = null 
        },
    },
})

export const { setPotentialCountries, deletePotentialCountries } =
potentialCountiresSlice.actions

export const selectPotentials = (state) => state.potentialCountires.value;

export default potentialCountiresSlice.reducer