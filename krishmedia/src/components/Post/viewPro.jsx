import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { geteAllUser } from '../../api/UserRequest';
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import FollowersCard from '../FollowersCard/FollowersCard';
import { useSelector } from 'react-redux';
import './Post.css';
const ViewPro = () => {
    const params = useParams();
    const [persons, setPersons] = useState([]);
    const {user} = useSelector((state)=>state.authReducer.authData);
    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data} = await geteAllUser();
            setPersons(data);
        };
        fetchPersons();
    },[user]);
  return (

    <div className="Profile">
     <div className='followerss'> <FollowersCard/></div>

    <div className="Profile-center">
        {
            persons.map((person, id)=>{
                if(person._id === params.id){
                   return <div key={id}>
                       
                       <ProfileCard location="profilePage" person={person}/> 
                       <PostSide person={person}/>
                    </div>

                }
            })
        }
        


       </div>
        
    <RightSide/>

</div>
  )
}

export default ViewPro
