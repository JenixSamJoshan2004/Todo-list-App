import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Additem from "./Additem";
import Searchitem from "./Searchitem";
import apiRequest from "./apiRequest";
import { useEffect, useState } from 'react'

function App() {
  
  const API_URL='http://localhost:3500/items';
  const [items,setItems]=useState([]
    //JSON.parse(localStorage.getItem('todo_list'))
     /* [
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
      ]*/
    );

    const[newItem,setNewItem]=useState('') // we are keeping this usestate empty becoz initially the text box is empty

    const[search,setSearch]=useState('') 

    // useEffect is a hook methord code inside it will runs in begining then it will run when the state of the element inside the list changes
    useEffect(()=>{
      const fetchItems= async()=>{
        try{
          const response= await fetch(API_URL);
          const listItems= await response.json()
          setItems(listItems)
        }
        catch{
          console.log("error occured")
        }
      }
      (async ()=> await fetchItems())()
    },[])

  const addItem=async(item)=>{
    const id=items.length ? items[(items.length) -1].id +1 : 1
    const addNewItem={id,checked:false,item}
    const listItem=[...items,addNewItem]
    setItems(listItem)
   // localStorage.setItem("todo_list",JSON.stringify(listItem))   we dont want to store in local storage becoz we created a server with API as a data base

   // now writing code to additem in database
   const postOption = {
    method: 'POST', // Corrected spelling
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(addNewItem)
   };

  const result = await apiRequest(API_URL, postOption);

   if (typeof result === 'string') {
      console.error(`Error: ${result}`); // Handle error if result is a string
   }
}

const handleCheck=async(id)=>{
      const listItems= items.map((item) =>
        item.id===id ? {...item, checked:!item.checked} : item)
        setItems(listItems)
       // localStorage.setItem("todo_list",JSON.stringify(listItems)
        
        const myItem = listItems.filter((item) => item.id===id)
        const updateOptions = {
            method: 'PATCH',
            headers:{
               'Content-Type': 'application/json'
            },
           body: JSON.stringify({checked:myItem[0].checked})
        }
        
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl, updateOptions)
}
  const handleDelete=async(id)=>{
    const listItems=items.filter((item)=>(
    item.id!==id))
    setItems(listItems)
    //localStorage.setItem("todo_list",JSON.stringify(listItems))

    const deleteOptions={
      method:'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)

  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submited")
    addItem(newItem)
    setNewItem('') 
  }
//<Additem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} /> 

  return (
    <div className="App">
      <Header title= "To Do List" subtitle="Powered by jenix"   />  
      <Additem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Searchitem search={search} setSearch={setSearch} /> 
      <Content //items={items}
              //this line is for searching this includes methord will check if the text entered in search bar is included or not in item
               items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
               handleCheck={handleCheck} 
               handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
