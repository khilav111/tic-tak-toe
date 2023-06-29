import React from "react";
interface Blockprops{
    value?:string|null;
    onClick?:()=>void // here we have to define onclick before passing this 
}
const Block: React.FC<Blockprops>= (props)=>{
    return (
 <div onClick={props.onClick} className="block">{props.value} </div>// here onClick meanns props.onClick means that by clicking on the onclick at div we are going to run the handle block which was passed in the component means 
 //onClick={props.onClick} =onClick = ()=>handleblock(); 
    )
}
export default Block;