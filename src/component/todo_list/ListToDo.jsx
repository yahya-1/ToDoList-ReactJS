import { Card } from 'antd';
import React from 'react'
import "./style.css"
import useListToDo from '../hooks/useListToDo';

const ListToDo = () => {

    const [onTab1Change, activeTabKey1, contentList, tabList] = useListToDo()
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