import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import User from '../User/User';
import { useSelector } from 'react-redux';
import { geteAllUser } from '../../api/UserRequest';
import { Link } from 'react-router-dom';
import { MdSupervisorAccount } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";

const FollowersCard = () => {
    const [persons, setPersons] = useState([]);
    const {user} = useSelector((state)=>state.authReducer.authData);
    const serverPublic = "http://localhost:5000/images/";
    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data} = await geteAllUser();
            setPersons(data);
        };
        fetchPersons();
    },[user]);
  return (
    <div className="FollowersCard">
        <h3>Poeple you may Know</h3>

        {persons. map((person, id)=>{
            if(person._id !== user._id){
              return  <User person={person} key={id}/>;
            }
        })}
              <div className="Nav">
          <Link to="../home"><IoMdHome  /></Link>
          <Link to="../people"><MdSupervisorAccount /></Link>
          <Link to="../chat"><IoChatboxEllipses /></Link>
          <Link to={`/profile/${user._id}`}><img  src={user?(user.profilepicture?serverPublic+user.profilepicture:serverPublic+"defaultProfile.png"):""} /></Link>
        </div>
    </div>
  )
}

export default FollowersCard