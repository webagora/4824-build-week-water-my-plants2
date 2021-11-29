import { Link } from 'react-router-dom'

const Users = (props) => {

    console.log('props: ', props);

    return (
        <div className = "user-wrapper">
            {props.users.map(user=>( 
                <div key = {user.login.uuid}> 
                    <h2>{user.name.first}</h2>
                    <Link to = {`/users/${user.login.uuid}`}>
                    <img src = {user.picture.large} alt = {user.name} />
                    </Link>
                    <p>Contact: {user.email} </p>
                    <p>Location: {user.location.state} </p>

                </div>
            ))}
        </div>   
    )
}

export default Users;