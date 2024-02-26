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
            const url = 'http://localhost:3000/list/get'
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

            const url = 'http://localhost:3000/list/add'

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
                    const url = 'http://localhost:3000/list/delete'
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
        const url = 'http://localhost:3000/list/edit'

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
                <div className="App">
                    <div className="card container col-6 mt-5">
                        <div className="card-body">
                            <button onClick={clearData} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#listModal">
                                ADD A LIST
                            </button>
                            <table className="table mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">LIST</th>
                                        <th scope="col">IMPORTANT</th>
                                        <th scope="col">DESCRIPTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map(item =>
                                        <tr>
                                            <td>{item.list}</td>
                                            <td>{item.important}</td>
                                            <td>{item.description}</td>
                                            <button className="btn btn-success" onClick={(e) => getID(item)} data-bs-toggle='modal' data-bs-target="#editModal" style={{ backgroundColor: 'green', color: 'white', marginLeft: '20px', width: '70px' }}>EDIT</button>
                                            <button className="btn btn-danger" onClick={(e) => handleDelete(item)} style={{ backgroundColor: 'red', color: 'white', marginLeft: '20px', width: '70px' }} >DELETE</button>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="modal fade" id="listModal" tabIndex="-1" aria-labelledby="listModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="listModalLabel">ADD A LIST</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <label className="mt-2">LIST :</label>
                                    <input type="text" className="form-control mt-3" value={data.list} onChange={(e) => setData({ ...data, list: e.target.value })} />
                                    <label className="mt-2">IMPORTANT :</label>
                                    <input type="text" className="form-control mt-3" value={data.important} onChange={(e) => setData({ ...data, important: e.target.value })} />
                                    <label className="mt-2">DESCRIPTION :</label>
                                    <input type="text" className="form-control mt-3" value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={handleAddList}>ADD LIST</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="editModalLabel">EDIT A LIST</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <label className="mt-2">LIST :</label>
                                    <input type="text" className="form-control mt-3" value={data.list} onChange={(e) => setData({ ...data, list: e.target.value })} />
                                    <label className="mt-2">IMPORTANT :</label>
                                    <input type="text" className="form-control mt-3" value={data.important} onChange={(e) => setData({ ...data, important: e.target.value })} />
                                    <label className="mt-2">DESCRIPTION :</label>
                                    <input type="text" className="form-control mt-3" value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={handleEdit}> EDIT LIST </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Home>


        </>


    )
}

export default List