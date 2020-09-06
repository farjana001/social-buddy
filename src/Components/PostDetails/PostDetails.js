import React, { useState, useEffect } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Comments from '../Comments/Comments';



const PostDetails = () => {
    const { id } = useParams();

    // for showing single post
    const [postDetails, setPostDetails] = useState({});
    const { title, body } = postDetails;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostDetails(data))
            .catch(err => console.log(err))
    }, [id]);

    // for showing comments
    const [ comments, setComments ] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err => console.log(err))
    },[id]);


    return (
        <div className='single-post'>
            <Box component="span" m={1}>
                <h1 className='single-post-heading'>{title}</h1>
                <p>{body}</p>
                <h2 style={{color: '#4040bd'}}>Comments : <span className='gray-text'>({comments.length})</span></h2>
                {
                    comments.map(cmt => <Comments key={cmt.id} comment={cmt}></Comments>)
                }
            </Box>
        </div>
    );
};

export default PostDetails;