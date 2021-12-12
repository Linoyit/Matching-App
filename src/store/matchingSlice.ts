import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '../components/models/Profile';
import { QuestionInfo } from '../components/models/QuestionInfo';
import { User } from '../components/models/User';

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
      firstName: 'Moshe',

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
      firstName: 'Rina',
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
      options: ['Secular', 'atheist', 'Traditional', 'Orthodox'],
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

    updateUserSelections: (state, action: PayloadAction<Array<string>>) => {
      let selection = state.profile.user.userSelections.find((selection) => 
        selection.type === action.payload[0]
      );
      if (selection) {
        selection.answer = action.payload[1];
      }
    },

    updateUserProperties: (state, action: PayloadAction<Array<string>>) => {
      let profile = state.profile;
      console.log(action);
      switch (action.payload[0]){
        case 'about': profile.user.about = action.payload[1]; break;
        case 'firstName': profile.user.firstName = action.payload[1]; break;
        case 'imageUrl': profile.user.imageUrl = action.payload[1]; break;
        case 'password': profile.password = action.payload[1]; break;
      }
    }
  },
});
// Action creators are generated for each case reducer function
export const { updateUserPreference, updateUserSelections, updateUserProperties } = matchingSlice.actions;

export default matchingSlice.reducer;
