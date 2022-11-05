
const initialData = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
function setDataLocalStorage(result) {
    localStorage.setItem("todos", JSON.stringify(result));
}

// function getDataLocalStorage() {
//         JSON.parse(localStorage.getItem("todos"))
// }
const todoReducer = (state = initialData, action) => {

    switch (action.type) {
        case "ADD_TODO": {
            let result = [...state, action.payload];
            setDataLocalStorage(result);
            return [...result];
        }

        case "GET_TODO": {
            let result = [...state]
            return result;
        }

        case "UPDATE_TODO": {
            let result = [...state]
            let index = result.findIndex((ele) => ele.id === action.payload.id)
            result[index] = {
                ...action.payload
            }
            setDataLocalStorage(result);
            return [...result];
        }
        case "DELETE_TODO": {
            let result = [...state];
            result.splice(action.payload, 1);
            setDataLocalStorage(result);
            return [...result];
        }
        default:
            return state
    }
}

export default todoReducer