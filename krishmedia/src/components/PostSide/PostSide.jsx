import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import InfoCard from '../InfoCard/InfoCard'
import { MdSupervisorAccount } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";

const PostSide = (person) => {
  const params = useParams();
  const {user} = useSelector((state)=>state.authReducer.authData);
  const serverPublic = "http://localhost:5000/images/";
  return (
    
   <div className="PostSide">
    {
      params.id ? 
      user._id === params.id? <PostShare />: <hr/> : <PostShare/>
    } 
    <hr/>
       <Posts/>
       <div className="Nav">
          <Link to="../home"><IoMdHome  /></Link>
          <Link to="../people"><MdSupervisorAccount /></Link>
          <Link to="../chat"><IoChatboxEllipses /></Link>
          <Link to={`/profile/${user._id}`}><img  src={user?(user.profilepicture?serverPublic+user.profilepicture:serverPublic+"defaultProfile.png"):""} /></Link>
        </div>

   </div>

   
  )
}

export default PostSide