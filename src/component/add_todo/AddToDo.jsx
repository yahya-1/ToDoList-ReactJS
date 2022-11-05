import { Button, Col, Input, Row } from 'antd'
import { HighlightOutlined } from '@ant-design/icons';

import React from 'react'
import useAddToDo from '../hooks/useAddToDo';

const AddToDo = () => {

    const [loadings, inputTodo, handelAdd, handelInput] = useAddToDo()

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
                    <Input value={inputTodo} onChange={(e) => handelInput(e)} size="large" placeholder="what needs to be done?" prefix={<HighlightOutlined />} />
                </Col>
                <Col span={7} className="gutter-row">
                    <Button size="large" block type="primary" loading={loadings[0]} onClick={handelAdd}>Add ToDo</Button>
                </Col>
            </Row>
        </>
    )
}

export default AddToDo