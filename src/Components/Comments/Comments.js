import React from 'react';
import './Comments.css';
import { Container } from '@material-ui/core';



const Comments = (props) => {
    //    const images = props.images;
    const { name, email, body } = props.comment;
    const image = props.images;
    console.log(image);


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