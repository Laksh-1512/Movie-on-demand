// moviesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        ToggleGPTSearchView: false,
        gptMovies:null,
        movieresults:null,
        moviename:null,
    },
    reducers: {
        ToggleGPTSearchView: (state) => {
            state.ToggleGPTSearchView = !state.ToggleGPTSearchView;
        },
        addgptMovieResult:(state,action)=>{
            const {moviename,movieresults}=action.payload;
              state.moviename=moviename;
              state.movieresults=movieresults;
        }
    },
    },
);

export const { ToggleGPTSearchView ,addgptMovieResult} = GPTSlice.actions;
export default GPTSlice.reducer;
