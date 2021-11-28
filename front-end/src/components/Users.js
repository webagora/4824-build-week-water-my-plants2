

const Users = (props) => {

    return (
        <div className = "user-wrapper">
            {props.users.map(user=> (
                <div> 
                    {user.name}
                </div>
            )) }
        </div>   
    )
}

export default Users;