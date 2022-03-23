import React from 'react';
 
const Header = () => {
   return (
       <div>
           <h1 >To do list </h1>
           <div className='box'>
          <br/>
                <h1>ToDoList</h1>
                <input type='text'placeholder='add an item'/>
                <button></button>
          
        </div>
        <li>items</li>
       </div>
   );
};
 
export default Header;