import './todolist.css';
import { useState } from 'react';

const Page = () => {

    const [ todoInput, setTodoInput ] = useState('');

    const [todoArray, setTodoArray] = useState([]);

    const handleTodoDisplay = () => {
        if (todoInput.trim()) {
            setTodoArray([...todoArray, todoInput.trim()]);
            setTodoInput('');
        }
    }

    const handleInputChange = (event) => {
        setTodoInput(event.target.value);
      }

      const handleDeletion = (index) => {
        setTodoArray(todoArray.filter((_, i) => i !==index));
      }
    
    return(
        <div className='page'>
            <div className='page-description'>
                enter task
            </div>
            
            <input type='text' value={todoInput} className='page-input' onChange={handleInputChange} />
            
            <button className='page-submit' onClick={handleTodoDisplay}> Submit </button>

            {todoArray.map((todoArray, index) => (
                <div key={index} className='page-todotask'>
                    {todoArray}
                    <div className='page-todotask-delete' onClick={() => {handleDeletion(index)}}>
                        ---
                    </div>
                </div>
            ))}

        </div>
    )

}

export default Page;