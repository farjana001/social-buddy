import React, { useState, useEffect } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Comments from '../Comments/Comments';



const PostDetails = () => {
    const { id } = useParams();
    const [postDetails, setPostDetails] = useState({});
    const { title, body } = postDetails;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, [id]);

    // for showing comments
    const [ comments, setComments ] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[id])


    // for showing images

    return (
        <div className='single-post'>
            <Box component="span" m={1}>
                <h2>{title}</h2>
                <p>{body}</p>
                <h4>Comments : ({comments.length})</h4>
                {
                    comments.map(cmt => <Comments key={cmt.id} comment={cmt}></Comments>)
                }
            </Box>
        </div>
    );
};

export default PostDetails;