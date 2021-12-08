interface   IProps{
  selectType: string;
  values: any[];
}

const Options: React.FC<IProps> = ({selectType, values}) =>{

  return(
    <select>
    <option>{selectType}</option>
   {values.map((val: any, index:any) =>
    <option value={index.toString()}>
         {val}
    </option>
   )}
</select>
  )

}

export default Options;