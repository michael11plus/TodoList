import './todolist.css';
import { useState } from 'react';
import Delete from '../assets/delete.png'

const Page = () => {

    const [ todoInput, setTodoInput ] = useState('');

    const [todoArray, setTodoArray] = useState([]);

    const handleTodoDisplay = (event) => {
        event.preventDefault();
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
            <form onSubmit={handleTodoDisplay} className='page-form'>
                <input type='text' value={todoInput} className='page-input' onChange={handleInputChange} />
                <button type="button" class="btn btn-outline-success btn-sm">Submit</button>
            </form>

            {todoArray.map((todoArray, index) => (
                <div key={index} className='page-todotask'>
                    <div className='page-todotask-content'>{todoArray}</div>
                    <img src={Delete} className='page-todotask-delete' onClick={() => {handleDeletion(index)} } alt='del' />
                </div>
            ))}

        </div>
    )

}

export default Page;