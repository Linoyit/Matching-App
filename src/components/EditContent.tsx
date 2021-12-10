import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faEdit)

const EditContent: React.FC = () => {
   
    return (
        <button><FontAwesomeIcon icon="edit" color='black' /></button>
    );
}
export default EditContent