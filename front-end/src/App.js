import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './App.css'

function App() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const payload = { username: username, password: password }
      const url = 'http://localhost:3000/user/register'

      await axios.post(url, payload).then(res => {
        if (res.data.message === 'success') {
          Swal.fire({
            title: 'REGISTER',
            text: 'REGISTER SUCCESS',
            icon: 'success',
            timer: 2000
          })
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
      const url = 'http://localhost:3000/user/login'

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

  return (
    <>
      <div className="App">
        <div className="card container col-3  text-center">
          <div className="card-body">
            <h4>Register</h4>
            <input type="text" className="form-control mt-4" onChange={e => setUsername(e.target.value)} />
            <input type="text" className="form-control mt-4" onChange={e => setPassword(e.target.value)} />
            <button type="button" class="btn btn-primary mt-4" style={{ width: '120px' }} onClick={handleLogin}>
              LOGIN
            </button>
            <br />
            <button type="button" class="btn btn-success mt-4" data-bs-toggle="modal" data-bs-target="#registerModal" style={{ width: '120px' }}>
              REGISTER
            </button>
          </div>
        </div>

        <div class="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="registerModalLabel">REGISTER</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label>Username :</label>
                <input type="text" className="form-control mt-2" onChange={e => setUsername(e.target.value)} />
                <label>Password :</label>
                <input type="text" className="form-control mt-2" onChange={e => setPassword(e.target.value)} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={handleRegister}>REGISTER</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default App;
