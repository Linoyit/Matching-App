/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import  './About.css';


interface   IProps{
  isBirth: boolean;
  label: string;
  values: any[];
}

const Options: React.FC<IProps> = ({label, values, isBirth}) =>{
  let width = ""
  isBirth? width = "20%": width = "75%";
  
   const labelStyle = css({
    padding: "12px 12px 12px 0",
    display: "inline-block",
    boxSizing: "border-box",
 
    
   })

   const labelDiv = css({
    float: "left",
    width: "25%" ,
    marginTop: "6px",
    boxSizing: "border-box",
    '@media screen and (max-width: 600px)':{
        width: "100%",
        marginTop: "0",
    }
   })

   const selectStyle = css({
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "vertical",
    boxSizing: "border-box",  
})

const selectDiv = css({
  float: "left",   
  width: "75%",
  marginTop: "6px",
  overflow: "visible",
  boxSizing: "border-box",
  '@media screen and (max-width: 600px)':{
      width: "100%",
      marginTop: "0",
  }
})
     
  return(
    <div className="row">
     <div css={labelDiv}><label css={labelStyle} >{label}</label></div>
    <div css={selectDiv}>
    <select css={selectStyle}>
   {values.map((val: any, index:any) =>
   
    <option value={index.toString()}>
         {val}
    </option>

   )}
</select>
</div>

</div>
  )

  

}

export default Options;