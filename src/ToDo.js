import React from 'react';
 
const ToDo = ({todo}) => {
   return (
 <div style={{textAlign:"left"}} className={'bungkus'}>
    <div className={'myButton'}>
       <div  className={todo.complete ? 'coret' : ''}>
        
           {todo.task}
       </div>
    </div>
 </div>
   );
};
 
export default ToDo;