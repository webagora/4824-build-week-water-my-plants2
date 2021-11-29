

const Users = (props) => {

    console.log('props: ', props);

    return (
        <div className = "user-wrapper">
            {props.users.map(user=>( 
                <div key = {user.uuid}> 
                    <h2>{user.name.first}</h2>
                    <img src = {user.picture.medium} alt = {user.name} />
                    <p>Contact: {user.email} </p>
                    <p>Location: {user.location.state} </p>

                </div>
            ))}
        </div>   
    )
}

export default Users;