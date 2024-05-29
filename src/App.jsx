import { useState } from 'react';
import './App.css';
import MyToDo from './MyToDo';

function App() {
  const [todo, setTodo] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setTodo(event.target.value)
  }

  const addListItems = () => {
    console.log("Click me to add")
    setItem((oldItem) => {
      return [...oldItem, todo]
    })
    setTodo(" ");
  }

  const dltItem = (id) => {
    console.log("Delte Items")

    setItem((oldItem) => {
      return oldItem.filter((arryElm, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>

      <div className='mainTodo'>
        <div className="addTodo">
          <h1>To Do List App</h1>
          <input type="text" placeholder='Add Your Todo' value={todo} onChange={itemEvent} />
          <button onClick={addListItems} className='add'> + </button>
        </div>

        <div className="mainItems">
          {item.map((itemValue, index) => {
            return <MyToDo key={index} id={index} txt={itemValue} onSelect={dltItem}/>
          })}
        </div>
      </div>

    </>
  )
}

export default App
