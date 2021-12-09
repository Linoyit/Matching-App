import { useFormInput } from '../hooks/useFormInput';
import './SendMessageBox.css';

const SendMessageBox: React.FC = () => {
  const placeholder = 'enter your message here';
  const newItem = useFormInput('');

  const handleSend = () => {
      console.log(newItem.value);
      newItem.onChange('');
  };

  return (
    <div className='sendMessageBox'>
      <input
        type='text'
        value={newItem.value}
        onChange={newItem.onChange}
        className='message'
        placeholder={placeholder}
      ></input>
      <button
        type='button'
        onClick={handleSend}
        disabled={newItem.value.length < 1}
      >
        send
      </button>
    </div>
  );
};

export default SendMessageBox;
