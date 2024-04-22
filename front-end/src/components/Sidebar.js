import { useState } from "react"
import { BiWorld } from "react-icons/bi";
import Earth from '../img/earth-1.jpeg'
import { HiOutlineXMark } from "react-icons/hi2";
function Sidebar() {
    const [name, setName] = useState()
    const fetchData = async () => {

    }
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ width: '250px' }}>
            <div className="sidebar" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column">
                        <li className="nav-item">
                            <a href="/list" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>LIST</p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/list" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>LIST</p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/list" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>LIST</p>
                            </a>
                        </li>

                    </ul>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                </div>
            </div>

        </aside>
    )
}

export default Sidebar