import React,{useState} from 'react';
import { connect } from 'react-redux'
import { postFriend } from '../action'

const FriendForm = props => {

    const [friendData, setFriendData] = useState({
        name: '',
        email: '',
        age: ''
    })


    const handleChange = e => {
        setFriendData({...friendData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        props.postFriend(friendData)
        setFriendData({
            name: '',
            email: '',
            age: ''
        })
    }


    return(
        <div>
            <h1>Add Friends</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    value={friendData.name}
                    onChange={handleChange}
                    required
                    name='name'
                />
                <br/>
                <input
                    type='email'
                    placeholder='Email'
                    value={friendData.email}
                    onChange={handleChange}
                    required
                    name='email'
                />
                <br/>
                <input
                    type='number'
                    placeholder='Age'
                    value={friendData.age}
                    onChange={handleChange}
                    required
                    name='age'
                />
                <br/>
                <button className='add' type='submit' >New Friend</button>
            </form>
        </div>
    )
}

export default connect(null, { postFriend })(FriendForm)

// export default FriendForm;