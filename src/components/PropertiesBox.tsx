import { useDisplayState } from '../hooks/useDisplayState';
import { useFormInput } from '../hooks/useFormInput';
import { useAppSelector } from '../store/hooks';
import { selection, User } from '../store/matchingSlice';
import { AdvanceQuestion } from './AdvanceQuestion';
import { BasicQuestion } from './BasicQuestion';
import EditContent from './EditContent';
import './PropertiesBox.css';

interface IProps {
  user: User;
  edit: boolean;
  onToggleChange: any;
}

const Matches: React.FC<IProps> = ({ user, edit, onToggleChange }) => {
  const questionsInfo = useAppSelector((state) => state.matching.QuestionsInfo);
  const userSelections: Array<selection> = user.userSelections;
  const name = useFormInput(user.firstName+" "+user.lastName, 'name');
  const display = useDisplayState();

  const advancedQuestions = questionsInfo.filter(
    (questionInfo) => questionInfo.question
  );
  const basicQuestions = questionsInfo.filter(
    (questionInfo) => !questionInfo.question
  );

  return (
    <div className='propertiesBox'>
      <ul className='basicQuestions'>
        <p>
          <b>Name: </b>
          {edit ? <EditContent handleClick={display.handleClick} /> : null}
          {name.value}
        </p>
        <input required style={display.btnStyle} type='text' {...name}></input>
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
