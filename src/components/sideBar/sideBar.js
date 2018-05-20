import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { connect } from 'react-redux'
import { closeDrawer } from '../../actions/Header/actionsCreators';
import { mailFolderListItems, otherMailFolderListItems } from '../../tileData';
import { compose } from 'redux';

import	styles from '../Header/headerCss';

const SideBar = ({openSideBar, closeDrawer, classes, theme}) => {
    return(
    	<div>
	        <Drawer
	            variant="permanent"
	            classes={{
	                paper: classNames(classes.drawerPaper, !openSideBar && classes.drawerPaperClose),
	            }}
	            open={openSideBar}
	        >
	            <div className={classes.toolbar}>
	                <IconButton>
	                    <IconButton onClick={() => closeDrawer()}>
	                        {classes.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
	                    </IconButton>
	                </IconButton>
	            </div>

	            <Divider />
	            <List>{mailFolderListItems}</List>
	            <Divider />
	            <List>{otherMailFolderListItems}</List>
	        </Drawer>
        </div>
    )
}

const hola = (state) => {
    console.log('state', state);
    console.log(state);
    return state
}

SideBar.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
	openSideBar: state.ReducerHeader.drawer.openSideBar
});

const mapDispatchToProps = dispatch => ({
	closeDrawer: () => dispatch(closeDrawer())
});

export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps)
)(SideBar);
