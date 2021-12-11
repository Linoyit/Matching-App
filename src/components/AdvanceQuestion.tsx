import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import {
  faPaw,
  faPrayingHands,
  faQuestion,
  faSmoking,
  faUtensils,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QuestionInfo, selection } from '../store/matchingSlice';
import { findAnswer } from './PropertiesBox';
import './AdvancedQuestion.css';
import EditContent from './EditContent';
import { useDisplayState } from '../hooks/useDisplayState';

interface IProps {
  questionInfo: QuestionInfo;
  userSelections: Array<selection>;
  edit: boolean;
  onToggleChange: any
}

library.add(faUtensils, faPaw, faPrayingHands, faSmoking, faQuestion, faEdit);

const findIcon = (questionType: string) => {
  let icon: IconDefinition = faQuestion;
  switch (questionType) {
    case 'Food':
      icon = faUtensils;
      break;
    case 'Smoking':
      icon = faSmoking;
      break;
    case 'Animals':
      icon = faPaw;
      break;
    case 'Religion':
      icon = faPrayingHands;
  }

  return icon;
};

export const AdvanceQuestion: React.FC<IProps> = ({
  questionInfo,
  userSelections,
  edit,
  onToggleChange
}) => {
  const display = useDisplayState();
  const options = questionInfo.options;
  const answer = findAnswer(questionInfo, userSelections)?.answer;

  const handleClick = (option:string) => {
    onToggleChange(questionInfo.type, option);
  }

  return (
    <div className='advancedQuestion'>
      <p>
        <FontAwesomeIcon icon={findIcon(questionInfo.type)} color='white' />
        <b>{'  ' + questionInfo.question}</b>
        {edit ? <EditContent handleClick={display.handleClick} /> : null}
      </p>
      <p style={display.oppositeStyle}>
        <i>{answer}</i>
      </p>
      <div style={display.btnStyle}>
        {options.map((option, index) => (
          <label key={index}>
            <input type='radio' value={option} checked={option===answer} onChange={()=>handleClick(option)}/>
            {option}
            <br />
          </label>
        ))}
      </div>
    </div>
  );
};
