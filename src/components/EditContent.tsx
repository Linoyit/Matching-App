import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faEdit)

interface IProps{
    handleClick: () => void;
}

const EditContent: React.FC<IProps> = (props: IProps) => {
   
    return (
        <span><FontAwesomeIcon className="fa-edit" onClick={props.handleClick} icon="edit" color='black' /></span>
    );
}
export default EditContent