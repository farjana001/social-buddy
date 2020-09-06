import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Container } from '@material-ui/core';
import {Link} from 'react-router-dom';
import TopBadge from '../TopBadge/TopBadge';
import logo from '../../logo.png';

    const useStyles = makeStyles({
        root: {
            width: 500,
        },
    });

    const Header = () => {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div><Link to='/home'><img style={{margin: '5px 0 0 40px'}} src={logo} alt=""/></Link></div>
            <Container maxWidth="sm">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}>
                     
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Container>
            <div style={{ marginRight: '60px' }}><TopBadge /></div>
        </div>
    );
};

export default Header;