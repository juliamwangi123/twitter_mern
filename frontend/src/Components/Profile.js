import {useAuthContext} from '../Hooks/useAuthContext'
const Profile =()=>{
    const {user} = useAuthContext()
    return(
        <div>
            {user && <div>
                <p>{user.user.email}</p>
                <p>{user.user.bio}</p>
                
                </div>}
        </div>
    )
}

export default Profile