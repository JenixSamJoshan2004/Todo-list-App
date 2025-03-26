/*import React from 'react' 
const Content = () => {
    let c=true;
  const handleClick = (event) => {
    if(c===true)
    {
      event.target.style.backgroundColor="red";
      c=false;
      event.target.innerText="don't me";
    }
    else{
      event.target.style.backgroundColor="transparent";
      c=true;
      event.target.innerText="click me";
    }
    console.log('clicked');
  };

  return (
    <div>
      <button
        className="btn"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
}
export default Content  

*/

/* useState() concept*/
/* useState() can be used to which the content or value changes while the user clicks */

/*import React from 'react'
import { useState } from 'react'


const Content = () => {

  const [count,setCount]=useState(99);
  function incrementFunction(){
    /**setCount(count +1) */   /* but this is not correct way of increasing becoz if we write this multiple time this will do change only once so call setCount function inside another arrow function 
    setCount((count)=> {return count+1})
  }
  function decrementFunction(){
    /**setCount(count -1) 
    setCount((count)=> {return count-1})
  }
  
  return (
    <div>
      <button onClick={incrementFunction}>+</button>
      <span>{count}</span>
      <button onClick={decrementFunction}>-</button>
    </div>
  )
}



export default Content
*/

//// this is the main component contains content
import React from 'react'
import Itemslist from './Itemslist'

const Content = ({items,handleCheck,handleDelete}) => {
/*  const [items,setItems]=useState(
    [
    {id:1,
     checked:false,
     item:"Practice Coding"
    },
    {id:2,
      checked:true,
      item:"Play cricket"
    },
    {id:3,
      checked:true,
      item:"Read about AI"
    }
    ]
  )
  const handleCheck=(id)=>{
    const listItems= items.map((item) =>(
      item.id===id ? {...item, checked:!item.checked} : item))
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
  }
const handleDelete=(id)=>{
  const listItems=items.filter((item)=>(
  item.id!==id))
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}*/


  return (
    <main>
      {items.length===0 ? <p>Your list is empty</p> : null}
      <Itemslist items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
    </main>
  )
}

export default Content