
import { useParams } from 'react-router-dom'

const User = (props) => {
    const {  id } = useParams();
    
    const foundUser = props.users.find (user => {
        return user.login.uuid === id;
    })

    console.log('foundUser: ', foundUser);
    return (
        <div>
            <h2>{foundUser.name.first}</h2>
            <p>{foundUser.email}</p>
            <img src = {foundUser.picture.large} alt ={foundUser.name.first} />
        </div>
    )
}

export default User;