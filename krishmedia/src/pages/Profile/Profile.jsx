import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
import { useSelector } from 'react-redux';
import { MdSupervisorAccount } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import InfoCard from '../../components/InfoCard/InfoCard'
// import '../../App.css';

const Profile = () => {
  const {user} = useSelector((state)=>state.authReducer.authData);
  const serverPublic = "http://localhost:5000/images/";
  return (
    <div className="Profile">

        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard location="profilePage"/>
                  <div className='infocard'>
                      <hr/>
                      <div style={{display:"flex", justifyContent:"center"}}>
                      <InfoCard />
                    </div>
                    </div>
                    <hr/>
            <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile