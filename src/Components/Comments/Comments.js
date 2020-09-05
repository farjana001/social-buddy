import React from 'react';



const Comments = (props) => {
//    const images = props.images;
    const { name, email, body } = props.comment;
    const image = props.images;
    console.log(image);
    // const { id } = props.images;
    // console.log(props.images);
    // const postImg = images.map(img => img.img);
    
    return (
        <div>
            <img src={image} alt=""/>
            <p>{body}</p>
            <p><strong>{name}<br/><small>{email}</small></strong></p>
        </div>
    );
};

export default Comments;