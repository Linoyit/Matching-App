import { css } from '@emotion/css';
import { useDisplayState } from '../hooks/useDisplayState';
import EditContent from './EditContent';
import { QuestionInfo } from './models/QuestionInfo';
import { selection } from './models/User';

interface IProps {
  onToggleChange: (type: string, option: string) => void;
  questionInfo: QuestionInfo;
  userSelections: Array<selection>;
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

const isThisUserAnswer = (
  questionInfo: QuestionInfo,
  userSelections: Array<selection>,
  option: string
): boolean => {
  const answer = findAnswer(questionInfo, userSelections)?.answer;
  const output = answer === option ? true : false;
  return output;
};

export const BasicQuestion: React.FC<IProps> = ({
  onToggleChange,
  questionInfo,
  userSelections,
  edit,
}) => {
  const display = useDisplayState();

  const determineLength = () => {

    const count = Math.round(questionInfo.options.length / 4);
    return count;

  }
  const btnStyle = css`
    column-count: ${determineLength()};
    `

  const handleChange = (option: string, questionInfo: QuestionInfo) => {
    onToggleChange(questionInfo.type, option);
  };
  return (
    <>
      {' '}
      <p>
        <b>{questionInfo.type}: </b>
        {edit? <EditContent handleClick={display.handleClick} /> : null}
          {findAnswer(questionInfo, userSelections)?.answer}
      </p>
      <div style={display.btnStyle}>
        {questionInfo.options.map((option, index) => (
          <label key={index + questionInfo.type}>
            <input
              type='radio'
              value={option}
              checked={isThisUserAnswer(questionInfo, userSelections, option)}
              onChange={() => handleChange(option, questionInfo)}
            />
            {option}
            <br />
          </label>
        ))}
      </div>
    </>
  );
};
