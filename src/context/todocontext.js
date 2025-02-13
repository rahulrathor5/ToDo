import {useContext,createContext} from "react"
//it contain the methad and the value name only not the functionality
export const TodoContext=createContext({
    Todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }

    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
    
})
// access the value of a context directly in functional components, 
// without the need for nested Consumer components.
export const useTodo=()=>{
    return useContext(TodoContext);
}
//allows you to supply a value to all components
// in its subtree that consume the context.
export const TodoProvider=TodoContext.Provider