import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'

import "./ProfileSide.css"
const ProfileSide = () => {
  return (
    <div className="ProfileSidee">
        {/* <LogoSearch/> */}
        <ProfileCard location="homepage"/>
        {/* <FollowersCard/> */}
    </div>
  )
}

export default ProfileSide