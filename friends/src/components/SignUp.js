import React,{useState} from 'react';
import { connect } from 'react-redux'
import { signIn } from '../action'

const SignUp = props => {


    const [info, setInfo] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        props.signIn(info)
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
                <button className='add' type='submit'>Submit</button>
            </form>

        </div>
    )
}


export default connect(null, { signIn })(SignUp)
