import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
 
  const inputRef = useRef() // we are using useref becoz once clicking add button the cursor should automatically move to text box to add another item
  return (
    <form className='addForm' onSubmit={(e)=>{
      handleSubmit(e);
      inputRef.current.focus();
    }}>
        <label htmlFor='additem'>Add item</label>
        <input id="additem"
               ref={inputRef}
               autoFocus
               type="text" 
               placeholder='Add item' 
               required
               value={newItem}
               onChange={(e)=>setNewItem(e.target.value)} // "e.target" means catching the user input "e.target.value" means storing those value in value
               />
        <button type='submit' 
                aria-label='Add item'> <FaPlus /> </button>
    </form>
  )
}

export default AddItem