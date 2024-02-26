
import Navbar from "./์Navbar";
import Sidebar from "./Sidebar";


function Home(props) {
    return (
        <>
            <div className="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
                <Navbar />
                <Sidebar />
                <div class='content-wrapper pt-3'>
                    <section class='content'>
                        {props.children}
                    </section>
                </div>
            </div>

        </>
    )
}

export default Home