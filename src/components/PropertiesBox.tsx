import { User } from '../store/matchingSlice';
import './PropertiesBox.css';

interface IProps {
  user: User;
}

const Matches: React.FC<IProps> = ({ user }) => {
  const a = Object.entries(user.userAnswers);

  return (
    <div className='propertiesBox'>
      <ul>
        <b>Properties:</b>
        {a.map((question, index) => 
          <li key={index}>
              <b>{question[0]}</b>
              :
              {question[1]}
          </li>
        )}
      </ul>
    </div>
  );
};
export default Matches;
