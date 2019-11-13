import React from 'react';
import { connect } from 'react-redux'
import { deleteFriend } from '../action'

const Friend = props => {


    return(
        <div>
            <h2>{props.friend.name}</h2>
            <h3>Email: {props.friend.email}</h3>
            <h3>Age: {props.friend.age}</h3>
            <button onClick={() => props.deleteFriend(props.friend.id)} >Bye Bye</button>
        </div>
    )
}

export default connect(null, { deleteFriend })(Friend)

// export default Friend