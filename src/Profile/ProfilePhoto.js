import React from 'react'
import Mypic from "./profile.png";
import {Card} from 'react-bootstrap';
function ProfilePhoto() {
    return (
        <div >
         
    <Card.Img variant="top" src={Mypic} xs="3" md="2" />
    
  
        </div>
    )
}

export default ProfilePhoto
