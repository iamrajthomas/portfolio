import React from 'react'
import { 
    //Grid, 
    Card, 
    Avatar,
    // Button 
} from '@material-ui/core'
// import { Link } from 'react-router-dom'

const AvatarCard = ({ user }) => {

    return (
        <Card className="px-6 py-4 mb-6">
            <Avatar
                sx={{ width: 356, height: 356 }}
                className="cursor-pointer avatar-profile"
                src={`${process.env.PUBLIC_URL}${user.avatar}`}
                // src={user.avatar}
                //src={`${process.env.PUBLIC_URL}/assets/images/rt/rt-face.jpg`}
            />
            <div className="card-title mt-3 text-center text-24 align-middle">{user.name.toUpperCase()}</div>
            <div className="card-subtitle mt-3 text-center capitalize text-10 align-middle">{user.designation}, {user.location}</div>

            {/* <div className='card-title mt-3 text-center text-24 align-middle'>
                <Link to="/">
                    <Button
                        className="capitalize"
                        variant="contained"
                        color="primary"
                        onClick={(e) => { e.preventDefault(); window.location.href = `${process.env.PUBLIC_URL}${user.cvUrl}`;
                        }}
                    >
                    Download My CV
                    </Button>
                </Link>
            </div> */}


        </Card>
    )
}

export default AvatarCard
