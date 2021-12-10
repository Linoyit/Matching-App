import { useAppSelector } from '../store/hooks';
import { QuestionInfo, selection, User } from '../store/matchingSlice';
import './PropertiesBox.css';

interface IProps {
  user: User;
}

const findAnswer = (
  questionInfo: QuestionInfo,
  userSelections: Array<selection>
) => {
  const a = userSelections.find(
    (selection) => selection.type === questionInfo.type
  );
  return a;
};

const Matches: React.FC<IProps> = ({ user }) => {
  const questionsInfo = useAppSelector((state) => state.matching.QuestionsInfo);
  const userSelections: Array<selection> = user.userSelections;

  const advancedQuestions = questionsInfo.filter(
    (questionInfo) => questionInfo.question
  );
  const basicQuestions = questionsInfo.filter((questionInfo) => !questionInfo.question);

  return (
    <div className='propertiesBox'>
      <ul className='basicQuestions'>
        {basicQuestions.map((questionInfo, index) => (
          <li key={index}>
            <p>
              <b>{questionInfo.type}: </b>
              <i>{findAnswer(questionInfo, userSelections)?.answer}</i>
            </p>
          </li>
        ))}
      </ul>
      <ul className='advancedQuestions'>
        {advancedQuestions.map((questionInfo, index) => (
          <li key={index}>
            <p>
              <b>{questionInfo.question}</b>
            </p>
            <p>
              <i>{findAnswer(questionInfo, userSelections)?.answer}</i>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;
