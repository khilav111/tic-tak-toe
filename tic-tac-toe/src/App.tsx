import React,{useState} from 'react';

import './App.css';
import Block from './components/block';

function App() {
  const [state,setState]= useState(Array(9).fill(null));
  const[turn,setturn]=useState("X");
  const checkwinner=(state:any[])=>{
 const win=[
  [0,1,2],
  [0,3,6],
  [6,7,8],
  [3,4,5],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
 ]
 for(let i=0;i<win.length;i++){
  const [a,b,c]=win[i];
  if(state[a]!=null && state[a]===state[b] && state[a]===state[c]){
    return true;
  }
  
 }return false;
  }
  const handleblock= (index:number)=>{
  const statecopy=Array.from(state);
  if(statecopy[index]!=null)
  return;
  statecopy[index]=turn ;
 
 setState(statecopy);
const win=checkwinner(statecopy);
if(win){
  alert(`${turn} is winner `);
}
 setturn(turn==="X"?"O":"X");
  }

  return (
  
    <div className='board'>
      <div className='row'> 
     {/* components can't have onclick propertry only html elements can have it .or some made up element. */}
      
      
      <Block onClick ={()=>handleblock(0)} value={state[0]}/>   {/* // on onclik we have to run the handle block. */}
       <Block  onClick ={()=>handleblock(1)}value={state[1]}/>   {/*the onclick will be passed to block.tsx. */}
      <Block  onClick ={()=>handleblock(2)} value={state[2]}/>
      </div>
      <div className='row'> 
      <Block  onClick ={()=>handleblock(3)} value={state[3]}/>
      <Block  onClick ={()=>handleblock(4)} value={state[4]}/>
      <Block  onClick ={()=>handleblock(5)} value={state[5]}/>
      </div>
      <div className='row'> 
      <Block  onClick ={()=>handleblock(6)} value={state[6]}/>
      <Block onClick ={()=>handleblock(7)} value={state[7]}/>
      <Block  onClick ={()=>handleblock(8)} value={state[8]}/>
      </div>
      
    </div>
  );
}

export default App;
