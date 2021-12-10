import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface User {
  username: string;
  firstName: string;
  // age: number;
  imageUrl: string;
  about: string;
  userSelections: Array<selection>;
}
export interface selection {
  type: string;
  answer: string;
}

export interface Profile {
  user: User;
  password: string;
  isLoggedIn: boolean;
}

export interface QuestionInfo {
  type: string;
  question?: string;
  options: Array<string>;
  filterOptions?: Array<string>;
}

export interface matchingState {
  profile: Profile;
  matches: Array<User>;
  filterSelections: Array<{ type: string; selection: Array<boolean> }>;
  QuestionsInfo: Array<QuestionInfo>;
}

const initialState: matchingState = {
  profile: {
    user: {
      username: '10',
      firstName: 'linoy',
      // age: 28,
      imageUrl: 'simpson.jpeg',
      about: 'Im handsome',
      userSelections: [
        { type: 'Location', answer: 'Tel-Aviv' },
        { type: 'Age', answer: '28' },
        { type: 'Gender', answer: 'Female' },
        { type: 'Smoking', answer: 'No' },
        { type: 'Food', answer: 'Pasta' },
        { type: 'Religion', answer: 'Traditional' },
        { type: 'Animals', answer: 'Yes' },
      ],
    },
    password: '1234',
    isLoggedIn: true,
  },
  matches: [
    {
      username: '1',
      firstName: 'linoy',
      // age: 28,
      about: 'Im handsome',
      imageUrl: 'simpson.jpeg',
      userSelections: [
        { type: 'Location', answer: 'Yehud' },
        { type: 'Age', answer: '29' },
        { type: 'Gender', answer: 'Female' },
        { type: 'Smoking', answer: 'Yes' },
        { type: 'Food', answer: 'Cheese' },
        { type: 'Religion', answer: 'Traditional' },
        { type: 'Animals', answer: 'No' },
      ],
    },
    {
      username: '2',
      firstName: 'Tehila',
      about: 'Im handsome',
      imageUrl: 'simpson.jpeg',
      userSelections: [
        { type: 'Location', answer: 'Jerusalem' },
        { type: 'Age', answer: '30' },
        { type: 'Gender', answer: 'Male' },
        { type: 'Smoking', answer: 'No' },
        { type: 'Food', answer: 'Fries' },
        { type: 'Religion', answer: 'Traditional' },
        { type: 'Animals', answer: 'Yes' },
      ],
    },
    {
      username: '3',
      firstName: 'Tehila',
      about: 'Im handsome',
      imageUrl: 'simpson.jpeg',
      userSelections: [
        { type: 'Location', answer: 'Tel-Aviv' },
        { type: 'Age', answer: '31' },
        { type: 'Gender', answer: 'Female' },
        { type: 'Smoking', answer: 'No' },
        { type: 'Food', answer: 'Pasta' },
        { type: 'Religion', answer: 'Traditional' },
        { type: 'Animals', answer: 'Yes' },
      ],
    },
    {
      username: '4',
      firstName: 'Tehila',
      about: 'Im handsome',
      imageUrl: 'simpson.jpeg',
      userSelections: [
        { type: 'Location', answer: 'Tel-Aviv' },
        { type: 'Age', answer: '28' },
        { type: 'Gender', answer: 'Female' },
        { type: 'Smoking', answer: 'No' },
        { type: 'Food', answer: 'Pasta' },
        { type: 'Religion', answer: 'Traditional' },
        { type: 'Animals', answer: 'Yes' },
      ],
    },
    {
      username: '5',
      firstName: 'Tehila',
      about: 'Im handsome',
      imageUrl: 'simpson.jpeg',
      userSelections: [
        { type: 'Location', answer: 'Tel-Aviv' },
        { type: 'Age', answer: '28' },
        { type: 'Gender', answer: 'Female' },
        { type: 'Smoking', answer: 'No' },
        { type: 'Food', answer: 'Pasta' },
        { type: 'Religion', answer: 'Traditional' },
        { type: 'Animals', answer: 'Yes' },
      ],
    },
    {
      username: '6',
      firstName: 'Tehila',
      about: 'Im handsome',
      imageUrl: 'simpson.jpeg',
      userSelections: [
        { type: 'Location', answer: 'Tel-Aviv' },
        { type: 'Age', answer: '28' },
        { type: 'Gender', answer: 'Female' },
        { type: 'Smoking', answer: 'No' },
        { type: 'Food', answer: 'Pasta' },
        { type: 'Religion', answer: 'Traditional' },
        { type: 'Animals', answer: 'Yes' },
      ],
    },
    {
      username: '7',
      firstName: 'Tehila',
      about: 'Im handsome',
      imageUrl: 'simpson.jpeg',
      userSelections: [
        { type: 'Location', answer: 'Tel-Aviv' },
        { type: 'Age', answer: '28' },
        { type: 'Gender', answer: 'Female' },
        { type: 'Smoking', answer: 'No' },
        { type: 'Food', answer: 'Pasta' },
        { type: 'Religion', answer: 'Traditional' },
        { type: 'Animals', answer: 'Yes' },
      ],
    },
    {
      username: '8',
      firstName: 'Maya',
      about: 'Im handsome',
      imageUrl: 'simpson.jpeg',
      userSelections: [
        { type: 'Location', answer: 'Tel-Aviv' },
        { type: 'Age', answer: '28' },
        { type: 'Gender', answer: 'Female' },
        { type: 'Smoking', answer: 'No' },
        { type: 'Food', answer: 'Pasta' },
        { type: 'Religion', answer: 'Traditional' },
        { type: 'Animals', answer: 'Yes' },
      ],
    },
  ],
  QuestionsInfo: [
    { type: 'Gender', options: ['Woman', 'Men'] },
    {
      type: 'Age',
      options: [
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      filterOptions: ['18-25', '25-35', '35-45', '45+'],
    },
    {
      type: 'Location',
      options: ['Jerusalem', 'Tel-Aviv', 'New-York'],
    },
    {
      type: 'Religion',
      question: 'What is your Religion?',
      //TODO: check namings below
      options: ['Hiloni', 'Ethaist', 'Mesorati', 'Haredi'],
    },
    {
      type: 'Food',
      question: 'What is your food preference?',
      options: ['Carnibor', 'Vegeterian', 'Vegan'],
    },
    {
      type: 'Animals',
      question: 'Do you love animals?',
      options: ['Yes', 'No'],
    },
    {
      type: 'Smoking',
      question: 'Do you smoke?',
      options: ['Yes', 'No'],
    },
  ],

  filterSelections: [
    { type: 'Gender', selection: [] },
    { type: 'Age', selection: [] },
    { type: 'Location', selection: [] },
    { type: 'Religion', selection: [] },
    { type: 'Food', selection: [] },
    { type: 'Animals', selection: [] },
    { type: 'Smoking', selection: [] },
  ],
};

export const matchingSlice = createSlice({
  name: 'matching',
  initialState,
  reducers: {
    updateUserPreference: (state, action: PayloadAction<Array<string>>) => {
      const preference = state.QuestionsInfo.find(
        (preference) => preference.type === action.payload[0]
      );
      if (preference) {
        const index = preference.options.indexOf(action.payload[1]);
        const options = preference.filterOptions
          ? preference.filterOptions
          : preference.options;
        const index = options.indexOf(action.payload[1]);
        const filterSelection = state.filterSelections.find(
          (filter) => filter.type === action.payload[0]
        );
        if (filterSelection) {
          filterSelection.selection[index] = !filterSelection.selection[index];
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserPreference } = matchingSlice.actions;

export default matchingSlice.reducer;
