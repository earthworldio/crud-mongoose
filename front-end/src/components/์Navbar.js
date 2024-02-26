function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button className="btn btn-primary mr-2" style={{ background: 'blue' }}>
                        <i className="fa fa-user mr-2"></i>
                        PROFILE
                    </button>
                    <button className="btn btn-danger mr-2" style={{ background: 'red' }}>
                        <i className="fa fa-times mr-2"></i>
                        LOGOUT
                    </button>
                </li>
            </ul>
        </nav>

    )
}




export default Navbar


