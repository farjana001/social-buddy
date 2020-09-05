import React from 'react';



const Comments = (props) => {
    // console.log(props);
    const { name, email, body } = props.comment;
 
    return (
        <div>
            <p>{body}</p>
            <p><strong>{name}<br/><small>{email}</small></strong></p>
        </div>
    );
};

export default Comments;