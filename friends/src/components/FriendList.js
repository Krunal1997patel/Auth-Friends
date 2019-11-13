import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { fetchFriends } from '../action/'
import Friend from './Friend';

const FriendList = props => {
    
    useEffect(()=>{
        props.fetchFriends()
    },[])

    if(props.isgetting){
        return <h1>Getting your Friend...</h1>
    }
    
    
    return(
        <div>
           <h2>Total Friend: {props.friend.length}</h2>
           {props.error && <p>{props.error}</p>}
           {props.friend.map(fri => (
               <Friend key={fri.id} friend={fri} />
           ))}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        friend: state.friend,
        isgetting: state.isgetting,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchFriends })(FriendList)

// export default FriendList;