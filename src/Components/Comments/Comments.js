import React from 'react';
import './Comments.css';
import { Container } from '@material-ui/core';



const Comments = (props) => {
    
    const image = props.image;
    const { name, email, body } = props.comment;



    return (
        <Container maxWidth='md'>
            <div className='comment-section'>
                <div ><img className='comment-img' src={image} alt="" /></div>
                <div className="comment-body">
                    <p>{body}</p>
                    <p><strong>{name}<br /><small className='gray-text'>{email}</small></strong></p>
                </div>
            </div>
        </Container>
    );
};

export default Comments;