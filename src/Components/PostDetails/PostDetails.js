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


    return (
        <div>
            <Box component="span" m={1}>
                <h2>{title}</h2>
                <p>{body}</p>
                <Comments/>
            </Box>

        </div>
    );
};

export default PostDetails;