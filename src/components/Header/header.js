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
import { openDrawer } from '../../actions/Header/actionsCreators';


import styles from './headerCss';
//export withStyles(styles, { withTheme: true })(Header);


const Header = ({openSideBar, openDrawer, classes, theme}) => {

	console.log('Component Header', openSideBar);

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
							onClick={() => openDrawer()}
							className={classNames(classes.menuButton, openSideBar && classes.hide)}
							>
							<MenuIcon />
						</IconButton>

						<Typography variant="title" color="inherit" className={classes.flex} noWrap>
							Mini variant drawer
						</Typography>

						<div>
							<IconButton
								aria-owns={open ? 'menu-appbar' : null}
								aria-haspopup="true"
								onClick={this.handleMenu}
								color="inherit"
							>
							<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={false}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={this.handleClose}
							>
								<MenuItem onClick={this.handleClose}>Profile</MenuItem>
								<MenuItem onClick={this.handleClose}>My account</MenuItem>
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
	openSideBar: state.ReducerHeader.drawer.openSideBar
});

const mapDispatchToProps = dispatch => ({
	openDrawer: () => dispatch(openDrawer())
});

export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps)
)(Header);
