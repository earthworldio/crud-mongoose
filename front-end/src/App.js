import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Earthworldio from './img/Earthworldio.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const payload = { username: username, password: password }
      const url = 'http://localhost:5005/user/register'

      await axios.post(url, payload).then(res => {
        if (res.data.message === 'success') {
          Swal.fire({
            title: 'REGISTER',
            text: 'REGISTER SUCCESS',
            icon: 'success',
            timer: 2000
          })
          clearState()
        } else {
          Swal.fire({
            title: 'REGISTER',
            text: 'REGISTER FAIL',
            icon: 'warning',
            timer: 2000
          })
        }
      })
    } catch (error) {
      console.log('error : ' + error);
    }
  }

  const handleLogin = async () => {
    try {
      const payload = { username: username, password: password }
      const url = 'http://localhost:5005/user/login'

      await axios.post(url, payload).then((res) => {
        if (res.data.message === 'success') {
          Swal.fire({
            title: 'LOGIN',
            text: 'LOGIN SUCCESS',
            icon: 'success',
            timer: 2000
          })
          navigate('/home')
        } else {
          Swal.fire({
            title: 'LOGIN',
            text: 'LOGIN FAIL',
            icon: 'error',
            timer: 2000
          })
        }
      })
    } catch (error) {
      console.log('error : ' + error);
    }
  }

  const clearState = () => {
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src={Earthworldio}
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">
                      Username :
                    </label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                    />
                  </div>

                  {/* Password input */}
                  <div data-mdb-input-init="" className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">
                      Password :
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    {/* Checkbox */}
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      onClick={handleLogin}
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="link-danger" data-bs-toggle="modal" data-bs-target="#registerModal">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="registerModalLabel">Register</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clearState}></button>
            </div>
            <div class="modal-body">
              <label>Username :</label>
              <input type="text" className="form-control mt-2" onChange={e => setUsername(e.target.value)} />
              <label style={{ marginTop: '10px' }}>Password :</label>
              <input type="text" className="form-control mt-2" onChange={e => setPassword(e.target.value)} />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleRegister}>
                <IoCheckmarkSharp /> REGISTER
              </button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={clearState}>
                <HiOutlineXMark /> EXIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
