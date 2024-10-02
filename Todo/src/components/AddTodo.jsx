// AddTodo.jsx

import  { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../feature/TodoSlice';

const AddTodo = () => {
   

    const [input, setInput] = useState('Add Todo');

    // dispatch the action from the store to add a new todo
    const dispatch = useDispatch()
    

    const handleAddTodo = (event) => {
        event.preventDefault()
        dispatch(addTodo(input))
        setInput('')
        alert('Todo added successfully');
    }

    return (
        <form onSubmit={handleAddTodo}>
        <div className="p-4">
            <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="Enter a new todo..."
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded p-2">
                Add Todo
            </button>
        </div>
        </form>
    );
};

export default AddTodo;
