/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import  './About.css';

interface IProps{
    label: string;
    type: string;
    placeHolder: string;
}

const Input: React.FC<IProps> = ({type, placeHolder, label}) => {
    let height = "";
    let margin = ""
    
     type === "textarea" || type === "file" ? height= "200px" :height = "45px"
     type === "textarea" || type === "file" ? margin = "20px" :margin = "6px"

    const  labelStyle =css({
        padding: "12px 12px 12px 0",
        display: "inline-block",
        float: "left",
        width: "25%",
        marginTop: "6px",
        boxSizing: "border-box",
        '@media screen and (max-width: 600px)':{
            width: "100%",
            marginTop: "0",
        }
    })

 

    const inputStyle = css({
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        resize: "vertical",
        width: "100%",
        height:  height,
        boxSizing: "border-box",
    })


    const row= css({
        float: "left",
        width: "75%",
        marginTop: margin,
        boxSizing: "border-box",
      
        '@media screen and (max-width: 600px)':{
            width: "100%",
            marginTop: "0",
        }  
    })

    return(  
              <div className="row">
                  <div css={labelStyle }>
                  <label >{label}</label>
                  </div>
                  
                  <div css={row}  >
                 {type === "textarea" ? <textarea id="subject" name="subject" 
                 placeholder="Write something.."  css={inputStyle}></textarea>:
                  <input  css={inputStyle } type={type}  placeholder={placeHolder} required></input>}
                  </div>
              </div>
    )  

}

export default Input;