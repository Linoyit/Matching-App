export interface QuestionInfo {
    type: string;
    question?: string;
    options: Array<string>;
    filterOptions?: Array<string>;
  }

export function useQuestions() {
    const questionsInfo = [
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
    ]
    return { questionsInfo };
}
