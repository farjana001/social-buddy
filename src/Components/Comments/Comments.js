import React from 'react';
import './Comments.css';



const Comments = (props) => {
    //    const images = props.images;
    const { name, email, body } = props.comment;
    const image = props.images;
    console.log(image);


    return (
        <div className='comment-section'>
            <div className=""><img className='comment-img' src={image} alt="" /></div>
            <div className="comment-body">
                <p>{body}</p>
                <p><strong>{name}<br /><small>{email}</small></strong></p>
            </div>
        </div>
    );
};

export default Comments;