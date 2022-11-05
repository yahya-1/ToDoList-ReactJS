/* eslint-disable jsx-a11y/anchor-is-valid */
import { Checkbox, List, Tag, Col, Row, Divider, Modal, Input, Popconfirm } from 'antd'
import "./style.css"
import { CheckOutlined, DeleteOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons'
import React from 'react'

import useToDoItem from '../hooks/useToDoItem'


const ToDoItem = ({ item }) => {

    const [onChange, loading, showModal, handleCancel, confirmLoading, modalText, open, confirm, handleOk, handelModalText] = useToDoItem(item);
    return (
        <>
            <List.Item>
                <Checkbox onChange={onChange} checked={loading === true ? "checked" : null}>
                    <Tag className='todo-tag' color={loading === true ? "success" : "error"} icon={loading === true ? <CheckOutlined /> : <MinusCircleOutlined />}></Tag>
                    {item.name}</Checkbox>

                <Row >
                    <Col className='contener-del ' onClick={showModal}>
                        <EditOutlined style={{ color: "#55efc4" }} />
                    </Col>

                    <Popconfirm
                        title="Are you sure to delete this task?"
                        okText="Yes"
                        onConfirm={confirm}
                        cancelText="No"
                    >
                        <a href='#'>
                            <Col className='contener-del ms-2 ' >
                                <DeleteOutlined style={{ color: "#d63031" }} />
                            </Col>
                        </a>
                    </Popconfirm>


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
                <Input value={modalText} onChange={((e) => handelModalText(e))} placeholder="Task modification" />
            </Modal>


        </>
    )
}

export default ToDoItem