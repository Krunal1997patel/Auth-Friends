import React,{useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const SignUp = props => {


    const [info, setInfo] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        // console.log([e.target.name], [e.target.value])
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        axiosWithAuth()
        .post('/login', info)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friendList')
        })
        .catch(err => console.log(err.response))
       setInfo({username: '', password: ''})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Username'
                    value={info.username}
                    required
                    onChange={handleChange}
                    name='username'
                />

                <br/>

                <input
                    type='password'
                    placeholder='Password'
                    value={info.password}
                    required
                    onChange={handleChange}
                    name='password'
                />
                <br/>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}


export default SignUp