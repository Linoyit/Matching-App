import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../store/hooks';
import { QuestionInfo, selection, User } from '../store/matchingSlice';
import { AdvanceQuestion } from './AdvanceQuestion';
import EditContent from './EditContent';
import './PropertiesBox.css';
library.add(fab, faUtensils)

interface IProps {
  user: User;
  edit: boolean;
}

export const findAnswer = (
  questionInfo: QuestionInfo,
  userSelections: Array<selection>
) => {
  const a = userSelections.find(
    (selection) => selection.type === questionInfo.type
  );
  return a;
};

const Matches: React.FC<IProps> = ({ user, edit }) => {
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
              { edit ? <EditContent /> : null }
              <i>{findAnswer(questionInfo, userSelections)?.answer}</i>
            </p>
          </li>
        ))}
      </ul>
      <ul className='advancedQuestions'>
        {advancedQuestions.map((questionInfo, index) => (
          <li key={index}>
            <AdvanceQuestion questionInfo={questionInfo} userSelections={userSelections} edit={edit} />
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Matches;


