import React, { useState, useEffect } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comments = () => {
    const [ comments, setComments ] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[]);
    return (
        <div>

            {
               comments.map(comment => <CommentDetails comment={comment}></CommentDetails>)
            }
        </div>
    );
};

export default Comments;