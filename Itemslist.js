// this component contains unordered list
import React from 'react';
import Lineitems from './Lineitems';

const Itemslist = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
              {items.map((item) =>(
                <Lineitems item={item}
                           key={item.id} // key is required becoz in this component there is a list and it is iterated by map so this will avoid error in console 
                           handleCheck={handleCheck} 
                           handleDelete={handleDelete} />
              ))}
              </ul>
  )
}

export default Itemslist