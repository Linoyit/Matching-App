import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string,
  firstName: string,
  age: number,
  imageUrl: string,
}

export interface Profile {
  username: string,
  password: string,
  nickName: string,
  imageUrl: string,
  about: string,
  userAnswers: Array<any>,
}

export interface matchingState {
  matches: Array<User>;
  isLoggedIn: boolean;
  questions: Array<string>;
  userAnswers: Array<string>;
  currentUser: Array<any>
  profile: Profile;
}

const initialState: matchingState = {
  matches: [{username: 'lsjsbd', firstName: 'linoy', age: 28, imageUrl: 'logo.svg'},
            {username: 'lknfkf', firstName: 'Tehila', age: 34, imageUrl: 'logo.svg'},
            {username: 'lknfkf', firstName: 'Tehila', age: 34, imageUrl: 'logo.svg'},
            {username: 'lknfkf', firstName: 'Tehila', age: 34, imageUrl: 'logo.svg'},
            {username: 'lknfkf', firstName: 'Tehila', age: 34, imageUrl: 'logo.svg'},
            {username: 'lknfkf', firstName: 'Tehila', age: 34, imageUrl: 'logo.svg'},
            {username: 'lknfkf', firstName: 'Tehila', age: 34, imageUrl: 'logo.svg'},
            {username: 'sldnf', firstName: 'Maya', age: 26, imageUrl: 'logo.svg'}],
  isLoggedIn : false,
  questions: ['Age', 'Height', 'Gender'],
  userAnswers: [],
  profile: {  username: 'Linoy', password: '1234', nickName: 'Linoyit', imageUrl: 'logo.svg', 
              about: 'Im happy', userAnswers: [28, 1.55, 'F']},
  currentUser: [{username: 'lsjsbd', firstName: 'linoy', age: 28, imageUrl: 'logo.svg'}, ]
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
});

// Action creators are generated for each case reducer function
export const {
  setUserAnswer,

} = matchingSlice.actions;

export default matchingSlice.reducer;

