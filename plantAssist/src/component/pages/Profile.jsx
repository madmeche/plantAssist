import '../styles/Profile.css'
import './Favorites'
import { Link } from 'react-router-dom'

const Profile = () => {
    // const pages = [favorites, logout]

    return(
        <>
        <div className='header'>
        <h1>Welcome</h1>
        <h3>Folders</h3>

        {/* <div> */}
        {/* {pages.map((page) => (
                <div key={page} onClick={handleCloseNavMenu}>
                  <Link to={page}>
                    <Typography textAlign="center" sx={{textTransform: 'capitalize'}}>{page}</Typography>
                  </Link> */}

        {/* </div>
))}
        </div> */}
        </div>
        </>
    )
}
export default Profile;