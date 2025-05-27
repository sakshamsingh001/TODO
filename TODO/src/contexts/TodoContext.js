    import {createContext, useContext} from "react"


    // global context for todos
    export const TodoContext = createContext({
        todos: [
            {
                id: 1,
                todo: " Todo msg",
                completed: false,
            }
        ],
        addTodo: (todo) => {},
        updateTodo: (id, todo) => {},
        deleteTodo: (id) => {}, 
        toggleComplete: (id) => {}
    })

    // custom hook to use the TodoContext
    export const useTodo = () => {
        return useContext(TodoContext)
    }
    // wrapper 
    export const TodoProvider = TodoContext.Provider