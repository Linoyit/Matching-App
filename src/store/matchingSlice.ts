import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string,
  firstName: string,
  age: number,
  imageUrl: string,
}

// const DATA_ENDPOINT = '/data.json';

// export const fetchTriviaQuestions = createAsyncThunk(
//   'matching/fetchCollection',
//   async () => {
//     const response = await fetch(DATA_ENDPOINT);
    
//     const dataAsJson = await response.json();
//     return dataAsJson;
//   }
// );

const initialState: any = {
  matches: [ {username: 'lsjsbd', firstName: 'linoy', age: 28, imageUrl: 'logo.svg'},
            {username: 'lknfkf', firstName: 'Tehila', age: 34, imageUrl: 'logo.svg'},
            {username: 'sldnf', firstName: 'Maya', age: 26, imageUrl: 'logo.svg'}],
  isLoggedIn : Boolean,
  questions: ['Age', 'Height', 'Gender'],
  userAnswers: [],
};

export const matchingSlice = createSlice({
  name: "matching",
  initialState,
  reducers: {

    setUserAnswer: (state, action: PayloadAction<any>) => {
    //   const question = state.items.find((item) => item.id === '' + action.payload.questionId);
    //   if (question) {
    //     state.userSelections[action.payload.questionId] = action.payload.optionIndex;
    //   }
    },

  },
  extraReducers: (builder) => {
    builder
    // .addCase(fetchTriviaQuestions.fulfilled, (state, action:PayloadAction<any>) => {
    //     state.items = action.payload;
    //     state.userSelections = new Array<number>(state.items.length).fill(-1);
    // });
  }
});

// Action creators are generated for each case reducer function
export const {
  setUserAnswer,

} = matchingSlice.actions;

export default matchingSlice.reducer;

