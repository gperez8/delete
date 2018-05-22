import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './headerCss';
import { openDrawer, openProfile, closeProfile } from '../../actions/Header/actionsCreators';

import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	MenuItem,
	Menu
} from '@material-ui/core'


const Header = ({
	openSideBar,
	openMenuProfile,
	openDrawer,
	openProfile,
	closeProfile,
	classes,
	theme

	}) => {

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
								<MenuItem onClick={closeProfile}>Logout</MenuItem>
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

const mapStateToProps = state => ({
	openSideBar: state.ReducerHeader.openSideBar,
	openMenuProfile: state.ReducerHeader.openMenuProfile
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
