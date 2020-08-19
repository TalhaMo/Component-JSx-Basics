import React from 'react';
import Address from './profile/Address';
import FullName from './profile/FullName';
import ProfilePhoto from './profile/ProfilePhoto';
import './Main.css'

function Main (){
    return(
        <div className='Main'>
        <FullName/>
        <ProfilePhoto/>
        <Address/>
        </div>
    )
}
export default Main;