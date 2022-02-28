import React from 'react'
import { 
    //Grid, 
    Card, 
    Avatar } from '@material-ui/core'

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
            {/* <div className="card-title mt-3 text-center text-24 align-middle">{process.env.PUBLIC_URL}{user.avatar}</div> */}
        </Card>
    )
}

export default AvatarCard
