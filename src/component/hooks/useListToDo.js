import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCompletedTodo, getPendingTodo, getTodo } from "../../redux/actionListToDo"
import ViewListItems from "../todo_list/ViewListItems"

const useListToDo = () => {

    const tabList = [
        {
            key: 'all',
            tab: 'All',
        },
        {
            key: 'completed',
            tab: 'Completed',
        },
        {
            key: 'pending',
            tab: 'Pending',
        },
    ];
    const dispatch = useDispatch()

    const selector = useSelector((state) => state.todoReducer)
    const selectorFilterCompleted = useSelector((state) => state.reducerFilter.stateFilterCompleted)
    const selectorFilterPending = useSelector((state) => state.reducerFilter.stateFilterPending)

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
        if (key === "all") {
            dispatch(getTodo())
        }
        if (key === "completed") {
            dispatch(getCompletedTodo())
        }
        if (key === "pending") {
            dispatch(getPendingTodo())
        }
    };

    const [activeTabKey1, setActiveTabKey1] = useState('all');

    const contentList = {
        all: selector.length > 0 ? <ViewListItems items={selector} /> : <p className='massage'>Look’s like you’re free today</p>,
        completed: selectorFilterCompleted && selectorFilterCompleted.length > 0 ? <ViewListItems items={selectorFilterCompleted} /> : <p className='massage'>You haven't finished any task yet !!</p>,
        pending: selectorFilterPending && selectorFilterPending.length > 0 ? <ViewListItems items={selectorFilterPending} /> : <p className='massage'>There is no pending task.</p>,
    };

    useEffect(() => {
        dispatch(getTodo())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [onTab1Change, activeTabKey1, contentList, tabList]
}

export default useListToDo