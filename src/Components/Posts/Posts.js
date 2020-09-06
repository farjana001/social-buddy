import React, { useState, useEffect } from 'react';
import ShowPosts from '../ShowPosts/ShowPosts';


const Posts = () => {
    // fetching post data
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err))
    }, []);
    
    return (
        <div style={{ borderTop: '5px solid lightcoral'}}>
            {
                posts.map(post => <ShowPosts key={post.id} post={post}></ShowPosts>)
            }
           
        </div>
    );
};

export default Posts;