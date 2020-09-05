import React from 'react';

const CommentDetails = (props) => {
    
    const { email, postId } = props.comment;
    return (
        <div>
            <h2>comment details{email}</h2>
        </div>
    );
};

export default CommentDetails;