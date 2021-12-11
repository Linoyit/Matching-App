import { useAppSelector } from '../store/hooks';
import { selection, User } from '../store/matchingSlice';
import { AdvanceQuestion } from './AdvanceQuestion';
import { BasicQuestion } from './BasicQuestion';
import './PropertiesBox.css';

interface IProps {
  user: User;
  edit: boolean;
  onToggleChange: any;
}

const Matches: React.FC<IProps> = ({ user, edit, onToggleChange }) => {
  const questionsInfo = useAppSelector((state) => state.matching.QuestionsInfo);
  const userSelections: Array<selection> = user.userSelections;

  const advancedQuestions = questionsInfo.filter(
    (questionInfo) => questionInfo.question
  );
  const basicQuestions = questionsInfo.filter(
    (questionInfo) => !questionInfo.question
  );

  return (
    <div className='propertiesBox'>
      <ul className='basicQuestions'>
        {basicQuestions.map((questionInfo, index) => (
          <li key={index}>
          <BasicQuestion
            onToggleChange={onToggleChange}
            edit={edit}
            questionInfo={questionInfo}
            userSelections={userSelections}
          />
          </li>
        ))}
      </ul>
      <ul className='advancedQuestions'>
        {advancedQuestions.map((questionInfo, index) => (
          <li key={index}>
            <AdvanceQuestion
              questionInfo={questionInfo}
              userSelections={userSelections}
              edit={edit}
              onToggleChange={onToggleChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;
