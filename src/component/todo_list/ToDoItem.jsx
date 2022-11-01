/* eslint-disable jsx-a11y/anchor-is-valid */
import { Checkbox, List, Tag, Col, Row, Divider, Modal, Input, Popconfirm, message, notification } from 'antd'
import "./style.css"
import { CheckOutlined, DeleteOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from '../../redux/actionListToDo'


const ToDoItem = ({ item }) => {

    const selector = useSelector((state) => state.todoReducer)
    const [loading, setLoading] = useState(item.completed)
    const dispatch = useDispatch()
    const onChange = (e) => {
        if (e.target.checked === true) {
            let itemCheck = selector.find(ele => ele.id === item.id)
            setLoading(!loading)
            localStorage.setItem("todos", JSON.stringify([...selector, itemCheck.completed = true].slice(0, -1)))
            setLoading(!loading)
        } else {
            let itemCheck = selector.find(ele => ele.id === item.id)
            setLoading(!loading)
            localStorage.setItem("todos", JSON.stringify([...selector, itemCheck.completed = false].slice(0, -1)))
            setLoading(!loading)
        }
    };

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(item.name);

    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'The task has been modified',
        });
    };
    const showModal = () => {
        setOpen(true);

    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            openNotificationWithIcon("success")
        }, 2000);
        dispatch(updateTodo({
            id: item.id,
            name: modalText,
            completed: item.completed
        }))
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const confirm = (e) => {
        message.success('The task has been deleted');
        dispatch(deleteTodo(selector.indexOf(item)))
    };

    return (
        <>
            <List.Item>
                <Checkbox onChange={onChange} checked={loading === true ? "checked" : null}>
                    <Tag className='todo-tag' color={loading === true ? "success" : "error"} icon={loading === true ? <CheckOutlined /> : <MinusCircleOutlined />}></Tag>
                    {item.name}</Checkbox>

                <Row >
                    <Col className='contener-del '>
                        <EditOutlined style={{ color: "#55efc4" }} onClick={showModal}  />
                    </Col>
                    <Col className='contener-del ms-2 '>
                        <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No"
                        >
                            <a href='#'><DeleteOutlined style={{ color: "#d63031" }} /></a>
                        </Popconfirm>

                    </Col>
                </Row>
            </List.Item>
            <Divider />
            <Modal
                title="Task modification"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Input value={modalText} onChange={(e) => setModalText(e.target.value)} placeholder="Task modification" />
            </Modal>


        </>
    )
}

export default ToDoItem