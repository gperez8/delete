import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import { compose } from 'redux';
import { connect } from 'react-redux'
import { openDrawer, openProfile, closeProfile } from '../../actions/Header/actionsCreators';


import styles from './headerCss';
//export withStyles(styles, { withTheme: true })(Header);


const Header = ({
	openSideBar, openMenuProfile, openDrawer, openProfile,
	closeProfile,  classes, theme }) => {

	console.log('Component Header openMenuProfile', openMenuProfile);

	const open = false;

	return(
		<div>
			<AppBar
				position="absolute"
				className={classNames(classes.appBar, openSideBar && classes.appBarShift)}
				>
					<Toolbar disableGutters={!openSideBar}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={openDrawer}
							className={classNames(classes.menuButton, openSideBar && classes.hide)}
							>
							<MenuIcon />
						</IconButton>

						<Typography variant="title" color="inherit" className={classes.flex} noWrap>
							Mini variant drawer
						</Typography>

						<div>
							<IconButton
								aria-owns={ Boolean(openMenuProfile) ? 'menu-appbar' : null }
								onClick={ openProfile }
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={openMenuProfile}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(openMenuProfile)}
								onClose={closeProfile}
							>
								<MenuItem onClick={closeProfile}>Profile</MenuItem>
								<MenuItem onClick={closeProfile}>My account</MenuItem>
							</Menu>
						</div>
					</Toolbar>


			</AppBar>
		</div>
	);
}


Header.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

const hola = (state) => {
	console.log('state', state.ReducerHeader.drawer.openSideBar);
}

const mapStateToProps = state => ({
	openSideBar: state.ReducerHeader.drawer.openSideBar,
	openMenuProfile: state.ReducerHeader.drawer.openMenuProfile
});

const mapDispatchToProps = dispatch => ({
	openDrawer: () => dispatch(openDrawer()),
	openProfile: (event) => dispatch(openProfile(event)),
	closeProfile: () => dispatch(closeProfile())
});

export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps)
)(Header);
