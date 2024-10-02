import {createSlice,nanoid}  from '@reduxjs/toolkit';

const initialState={    
todos:[{ id:1,title:'todo1',completed:false,isUpdateble:false},]
}
   
const TodoSlice=createSlice({
    name:'todos',

    // initial state is defined above
    initialState,
    reducers:{
       addTodo:(state,action)=>
        {
              const newTodo=
              {
                    id:nanoid(),
                    title:action.payload,
                    completed:false,
                    isUpdateble:false
              }
                state.todos.push(newTodo);
        },
        removeTodo:(state,action)=>
        {
            state.todos=state.todos.filter(todo=>todo.id!==action.payload);
        },
        toggleTodo:(state,action)=>{
            const wantedTodo=state.todos.filter(todo=>todo.id===action.payload);
            wantedTodo[0].completed=!wantedTodo[0].completed;
            
           
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            console.log(todoToUpdate.id);
            
            if (todoToUpdate) {
                todoToUpdate.title = title;
            }
        },
        isUpdateble:(state,action)=>{ 
            const wantedTodo=state.todos.filter(todo=>todo.id==action.payload);
            wantedTodo[0].isUpdateble=!wantedTodo[0].isUpdateble;
        }  
    }
    
})
// export the actions to use in components
export const {addTodo,removeTodo,toggleTodo,updateTodo,isUpdateble}=TodoSlice.actions;

// export the reducer to use in store
export default TodoSlice.reducer;