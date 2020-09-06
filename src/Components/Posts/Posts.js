import React, { useState, useEffect } from 'react';
import './Posts.css';
import ShowPosts from '../ShowPosts/ShowPosts';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div className='post-container'>
            {
                posts.map(post => <ShowPosts key={post.id} post={post}></ShowPosts>)
            }
           
        </div>
    );
};

export default Posts;