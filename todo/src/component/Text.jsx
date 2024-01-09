import { useState } from 'react'

function Text() {

    const [text , setText] = useState('')
    const [addtodo , setAddtodo] = useState([])
    
    const Handle = (e) =>{
        let val = (e.target.value);
        setText(val)
    }
    
    const addTodo = () => {
        if (text.trim() !== '') {
            setAddtodo([...addtodo, text]);
          
        }
        setText('')
      };

  return (
    <>
    <div className='Text-Container'>
        <form action="">
            <input type="textarea" name="textarea" id="textarea"
            onChange={Handle} value={text}/>    
        </form>
        <button className='btn-todo' onClick={addTodo} >Add Todo</button>
        <button className='btn-copy bg-gray-700'>Copy Text</button>
        


    </div>
    <div className='addedtodo' onChange={addTodo}>
       <p> {text ? '' : addtodo}</p>
    </div>
        
    </>
  )
}

export default Text