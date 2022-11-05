import { message, notification } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/actionListToDo";

function useToDoItem(item) {

    const selector = useSelector((state) => state.todoReducer)

    const [loading, setLoading] = useState(item.completed)
    const dispatch = useDispatch()
    const onChange = (e) => {
        if (e.target.checked === true) {
            // let itemCheck = items.find(ele => ele.id === item.id)
            setLoading(!loading)
            dispatch(updateTodo({
                id: item.id,
                name: item.name,
                completed: true
            }))
            // localStorage.setItem("todos", JSON.stringify([...selector, itemCheck.completed = true].slice(0, -1)))
            setLoading(!loading)
        } else {
            //  let itemCheck = selector.find(ele => ele.id === item.id)
            setLoading(!loading)
            dispatch(updateTodo({
                id: item.id,
                name: item.name,
                completed: false
            }))
            // localStorage.setItem("todos", JSON.stringify([...selector, itemCheck.completed = false].slice(0, -1)))
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
    const handelModalText = (e) => {
        setModalText(e.target.value)
    }
    const handleCancel = () => {
        setOpen(false);
    };
    const confirm = (e) => {
        message.success('The task has been deleted');
        dispatch(deleteTodo(selector.indexOf(item)))
    };

    return [onChange, loading, showModal, handleCancel, confirmLoading, modalText, open, confirm, handleOk, handelModalText]
}

export default useToDoItem