import './RadioButton.css'


interface  IProps{
    values: any[];
}

const RadioButton: React.FC<IProps> = ({values}) => {
  
   return(
    <ul> 
    {values.map((val: any) => 
      <li>
        <input  type="checkbox"/>
        <label>{val}</label>
      </li>
    )}
    </ul> 
   );

}
export default RadioButton;