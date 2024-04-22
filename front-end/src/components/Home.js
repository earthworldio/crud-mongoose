import Sidebar from "./Sidebar";


function Home(props) {
    return (
        <>
            <div className="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
                <Sidebar />
                <div class='content-wrapper'>
                    <section class='content'>
                        {props.children}
                    </section>
                </div>
            </div>

        </>
    )
}

export default Home