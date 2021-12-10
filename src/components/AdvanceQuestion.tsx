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

interface IProps {
  questionInfo: QuestionInfo;
  userSelections: Array<selection>;
  edit: boolean;
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
  edit
}) => {
  return (
    <div className='advancedQuestion'>
      <p>
        <FontAwesomeIcon icon={findIcon(questionInfo.type)} color='white' />
        <b>{'  ' + questionInfo.question}</b>
        {edit ? <EditContent /> : null}
      </p>
      <p>
        <i>{findAnswer(questionInfo, userSelections)?.answer}</i>
      </p>
    </div>
  );
};
