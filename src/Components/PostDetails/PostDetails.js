import React, { useState, useEffect } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Comments from '../Comments/Comments';
import fakeData from '../../fakeData/fakeData';



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
    const [ images, setImages ] = useState(fakeData);
    const postImg = images.map(img => img.img);

    return (
        <div className='single-post'>
            <Box component="span" m={1}>
                <h1 className='single-post-heading'>{title}</h1>
                <p>{body}</p>
                <h3 className='comments'>Comments : <span className='gray-text'>({comments.length})</span></h3>
                {
                    comments.map(cmt => <Comments key={cmt.id} comment={cmt} images={postImg}></Comments>)
                }
            </Box>
        </div>
    );
};

export default PostDetails;