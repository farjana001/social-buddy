import React from 'react';
import { Container } from '@material-ui/core';



const Comments = (props) => {
    const { name, email, body } = props.comment;

    // making a function to get a dynamic image id
    const imgId = (num) => {
        return Math.floor(Math.random() * Math.floor(num));
    }

    // making a function to get a dynamic gender key
    const gender = () => {
        const img = Math.floor(Math.random() * Math.floor(5));
        let person;
        (img === 1) ? person = 'women' : person = 'men';
        return person;
    }

    const imgUrl = `https://randomuser.me/api/portraits/med/${gender()}/${imgId(20)}.jpg`;

    return (
        <Container maxWidth='md'>
            <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid lightcoral'}}>
                <div>
                    <img style={{ borderRadius: '50%', marginRight: '15px'}} src={imgUrl} alt="" />
                </div>
                <div className="comment-body">
                    <p>{body}</p>
                    <p><strong>{name}<br /><small className='gray-text'>{email}</small></strong></p>
                </div>
            </div>
        </Container>
    );
};

export default Comments;