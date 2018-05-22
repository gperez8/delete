import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import	styles from '../Header/headerCss';
import { mailFolderListItems, otherMailFolderListItems } from '../../tileData';
import { closeDrawer } from '../../actions/Header/actionsCreators';

import {
	Drawer,
	List,
	Divider,
	IconButton,
} from '@material-ui/core';

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
                    <IconButton onClick={closeDrawer}>
                        {classes.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
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

SideBar.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
	openSideBar: state.ReducerHeader.openSideBar
});

const mapDispatchToProps = dispatch => ({
	closeDrawer: () => dispatch(closeDrawer())
});

export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps)
)(SideBar);
