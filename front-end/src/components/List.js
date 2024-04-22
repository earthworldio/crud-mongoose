import { useEffect, useState } from "react"
import axios from "axios";
import Swal from "sweetalert2";
import Home from "./Home";

function List() {
    
    const [data, setData] = useState({})
    const [list, setList] = useState([])
    const [id, setID] = useState({})

    const clearData = () => { setData({ list: '', important: '', description: '' }) }
    
    useEffect(() => { fetchData() }, [list])

    const fetchData = async () => {
        try {
            const url = 'http://localhost:5005/list/get'
            await axios.get(url).then(res => {
                if (res.data.message === 'success') { setList(res.data.result) }
            })
        } catch (error) {
            Swal.fire({
                title: 'ERROR',
                text: error.message,
                icon: 'error'
            })
        }
    }

    const handleAddList = async (e) => {
        e.preventDefault()
        try {
            const payload = { list: data.list, important: data.important, description: data.description }

            const url = 'http://localhost:5005/list/add'

            await axios.post(url, payload).then((res) => {
                if (res.data.message === 'success') {
                    Swal.fire({
                        title: 'success',
                        text: 'Add list success',
                        icon: 'success'
                    })
                }
            })
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error'
            })
        }
    }

    const handleDelete = async (item) => {
        try {
            Swal.fire({
                title: 'DELETE',
                text: 'ARE YOU SURE TO DELETE',
                icon: 'error',
                showCancelButton: true
            }).then(async res => {
                if (res.isConfirmed) {
                    const url = 'http://localhost:5005/list/delete'
                    await axios.post(url, { id: item.id }).then(res => {
                        if (res.data.message === 'success') {
                            Swal.fire({
                                title: 'DELETE',
                                text: 'DELETE SUCCESS',
                                icon: 'success',
                                timer: 2000
                            })
                        }
                    })
                }
            })
        } catch (error) {
            Swal.fire({
                title: 'ERROR',
                text: error.message,
                icon: 'error'
            })
        }
    }

    const handleEdit = async (item) => {
        const payload = { list: data.list, important: data.important, description: data.description, id: id }
        const url = 'http://localhost:5005/list/edit'

        try {
            await axios.post(url, payload).then(res => {
                console.log(res.data);
                if (res.data.message === 'success') {
                    Swal.fire({
                        title: 'EDIT',
                        text: 'EDIT SUCCESS',
                        icon: 'success',
                        timer: 2000
                    })
                }
            })
        } catch (error) {
            Swal.fire({
                title: 'ERROR',
                text: error.message,
                icon: 'error'
            })
        }
    }

    const getID = (item) => {
        setID(item._id)
        setData({ list: item.list, important: item.important, description: item.description })
    }

    return (
        <>
            <Home>
               
            </Home>
        </>


    )
}

export default List