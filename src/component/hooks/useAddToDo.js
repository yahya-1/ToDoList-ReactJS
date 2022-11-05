import { notification } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actionListToDo";

const useAddToDo = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [inputTodo, seInputToDo] = useState("")

    const handelInput = (e) => {
        seInputToDo(e.target.value)
    }

    const [loadings, setLoadings] = useState([]);
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
            openNotificationWithIcon("success", 'The task has been added')
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

    return [loadings, inputTodo, handelAdd, handelInput]
}

export default useAddToDo