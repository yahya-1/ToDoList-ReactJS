import { Card } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompletedTodo, getPendingTodo, getTodo } from '../../redux/actionListToDo'
import ViewListItems from './ViewListItems';
import "./style.css"

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

const ListToDo = () => {

    const dispatch = useDispatch()

    const selector = useSelector((state) => state.todoReducer)
    const selectorFilter = useSelector((state) => state.reducerFilter.status)
    const [filterCompleted, setFilterCompleted] = useState(selector.filter((item) => item.completed === true))
    const [filterPending, setFilterPending] = useState(selector.filter((item) => item.completed === false))


    const onTab1Change = (key) => {
        if (key === "all") {
            dispatch(getTodo())
        }
        if (key === "completed") {
            dispatch(getCompletedTodo("completed"))
        }
        if (key === "pending") {
            dispatch(getPendingTodo("pending"))
        }
        setActiveTabKey1(key);
    };

    const [activeTabKey1, setActiveTabKey1] = useState('all');
    let items = [...selector]
    let filterComplet = [...filterCompleted]
    let filterPend = [...filterPending]
    useEffect(() => {
        if (selectorFilter === "all") {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            items = [...items]
        }
        if (selectorFilter === "completed") {
            setFilterCompleted(selector.filter((item) => item.completed === true))
        }
        if (selectorFilter === "pending") {
            setFilterPending(selector.filter((item) => item.completed === false))
        }
    }, [selectorFilter])

    const contentList = {
        all: items.length > 0 ? <ViewListItems items={items} /> : <p className='massage'>Look’s like you’re free today</p>,
        completed: filterComplet.length > 0 ? <ViewListItems items={filterComplet} /> : <p className='massage'>You haven't finished any assignment yet !!</p>,
        pending: filterPend.length > 0 ? <ViewListItems items={filterPend} /> : <p className='massage'>There is no pending task.</p>,
    };



    useEffect(() => {
        dispatch(getTodo())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Card
                className='mt-3'
                style={{
                    width: '100%',
                }}
                title="Todo List"
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={(key) => {
                    onTab1Change(key);
                }}
            >
                {contentList[activeTabKey1]}
            </Card>
        </>
    )
}

export default ListToDo