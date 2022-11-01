
export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: data
    }
}

export const getTodo = () => {
    return {
        type: "GET_TODO",
    }
}


export const getCompletedTodo = (value) => {

    return {
        type: "filterStatus",
        payload: value
    }
}


export const getPendingTodo = (value) => {
    return {
        type: "filterStatus",
        payload: value
    }
}

export const updateTodo = (data) => {
    return {
        type: "UPDATE_TODO",
        payload: data
    }
}

export const deleteTodo = (index) => {
    return {
        type: "DELETE_TODO",
        payload: index
    }
}