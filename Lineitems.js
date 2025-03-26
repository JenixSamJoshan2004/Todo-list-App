// this component contains list of items
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Lineitems = ({item,handleCheck,handleDelete}) => {
  return (
    <li className="item" key={item.id}>
            
                      <label style={item.checked ? {textDecoration: 'line-through' }: null} onDoubleClick={()=>handleCheck(item.id)}>{item.item} </label>
                      <input type="checkbox" checked={item.checked} onChange={()=>handleCheck(item.id)} />
                      <FaTrashAlt role="button" tabindex="0" onClick={()=>handleDelete(item.id)}  aria-label={`Delete ${item.item}`}/>
            
                     </li>
  )
}

export default Lineitems