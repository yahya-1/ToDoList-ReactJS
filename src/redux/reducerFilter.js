
const initialData = {
    status: ""
}

const reducerFilter = (state = initialData, action) => {
    switch (action.type) {
        case "filterStatus":
            return {
                ...state,
                status: action.payload
            }

        default:
            return state
    }
}

export default reducerFilter