const initialData = {
    state: localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [],
    stateFilterCompleted: [],
    stateFilterPending: [],
};

const reducerFilter = (state = initialData, action) => {
    switch (action.type) {
        case "filterCompleted":
            return {
                stateFilterCompleted: localStorage.getItem("todos") ?
                    JSON.parse(localStorage.getItem("todos")).filter((item) => item.completed === true) : []
            }
        case "filterPending":
            return {
                stateFilterPending: localStorage.getItem("todos") ?
                    JSON.parse(localStorage.getItem("todos")).filter((item) => item.completed === false) : []
            }
        default:
            return state
    }
}

export default reducerFilter