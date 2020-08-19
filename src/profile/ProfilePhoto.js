import React from 'react';
// import MyPhoto from '../../public/MyPhoto.jpg';
import MyPhoto from "./MyPhoto.jpg";
import  './ProfilePhoto.css';

function ProfilePhoto (){
    return(
        <div className='profilPhoto'>
        <img src={MyPhoto} className='myImage' alt='myPhoto'/>
        </div>
    )
}
export default ProfilePhoto;