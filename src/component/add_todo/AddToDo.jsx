import { Button, Col, Input, message, notification, Row } from 'antd'
import { HighlightOutlined } from '@ant-design/icons';

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actionListToDo';

const AddToDo = () => {
    const [loadings, setLoadings] = useState([]);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [inputTodo, seInputToDo] = useState("")

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    const dispatch = useDispatch()
    const openNotificationWithIcon = (type, mess) => {
        notification[type]({
            message: mess,
        });
    };
    const handelAdd = (e) => {
        e.preventDefault()
        if (inputTodo === "") {
            openNotificationWithIcon("warning", 'Add Task')
            return;
        }
        setLoading(true)
        setData([...data, inputTodo])
        setLoading(false)
        setTimeout(() => {
            openNotificationWithIcon("success", 'Mission added')
        }, 1000);
        enterLoading(0)
    }
    useEffect(() => {
        if (loading === false) {
            dispatch(addTodo({
                id: Math.floor(Math.random() * 100),
                name: inputTodo,
                completed: false,
            }))
            seInputToDo("")
        }
        setLoading(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("data"))
        if (items) {
            setData(items)
        }
    }, [])

    return (
        <>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col span={17} className="gutter-row">
                    <Input value={inputTodo} onChange={(e) => seInputToDo(e.target.value)} size="large" placeholder="what needs to be done?" prefix={<HighlightOutlined />} />
                </Col>
                <Col span={7} className="gutter-row">
                    <Button size="large" block type="primary" loading={loadings[0]} onClick={handelAdd}>Add ToDo</Button>
                </Col>
            </Row>
        </>
    )
}

export default AddToDo