import React from 'react'
import ToDoItem from './ToDoItem'

const ViewListItems = ({ items }) => {
    return (
        <>
            {
                items.map((item => <ToDoItem item={item} key={item.id} />))
            }
        </>
    )
}

export default ViewListItems