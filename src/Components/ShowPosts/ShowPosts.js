import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '85px'
    },
    paper: {
        width: 800,
        backgroundColor: theme.palette.background.paper,
        // borderRadius: '10px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderLeft: '8px solid #F30158'
    },
}));

const ShowPosts = (props) => {
    // destructuring post data
    const { title, body, id } = props.post;

    // for button
        let history = useHistory();
        const handleReadMoreButton = (id) => {
            history.push(`/post/${id}`)
        }

    const classes = useStyles();
    const rootRef = React.useRef(null);

    return (
        <div className={classes.root} ref={rootRef}>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}>
                <div className={classes.paper}>
                    <h2 style={{textTransform: 'capitalize'}} id="server-modal-title">{title}</h2>
                    <p style={{textTransform: 'capitalize'}} id="server-modal-description">{body}</p>
                    <Button onClick={() => handleReadMoreButton(id)} variant="contained" color="secondary">See Comments</Button>
                </div>
            </Modal>
        </div>
    );
};

export default ShowPosts;