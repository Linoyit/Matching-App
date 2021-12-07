import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const DATA_ENDPOINT = '/data.json';

export const fetchTriviaQuestions = createAsyncThunk(
  'trivia/fetchCollection',
  async () => {
    const response = await fetch(DATA_ENDPOINT);
    
    const dataAsJson = await response.json();
    return dataAsJson;
  }
);

const initialState: any = {
  items: [],
  userSelections: [],
};

export const triviaSlice = createSlice({
  name: "trivia",
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
    .addCase(fetchTriviaQuestions.fulfilled, (state, action:PayloadAction<any>) => {
        state.items = action.payload;
        state.userSelections = new Array<number>(state.items.length).fill(-1);
    });
  }
});

// Action creators are generated for each case reducer function
export const {
  setUserAnswer,

} = triviaSlice.actions;

export default triviaSlice.reducer;

