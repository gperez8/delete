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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { openDrawer } from '../../actions/Header/actionsCreators';


import styles from './headerCss';
//export withStyles(styles, { withTheme: true })(Header);


const Header = ({open, openDrawer, classes, theme}) => {

	console.log('Component Header', open);

	return(
		<div>
			<AppBar
				position="absolute"
				className={classNames(classes.appBar, open && classes.appBarShift)}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={() => openDrawer()}
							className={classNames(classes.menuButton, open && classes.hide)}
							>
							<MenuIcon />
						</IconButton>

						<Typography variant="title" color="inherit" noWrap>
							Mini variant drawer
						</Typography>
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
	console.log('state', state.ReducerHeader.drawer.open);
}

const mapStateToProps = state => ({
	open: state.ReducerHeader.drawer.open
});

const mapDispatchToProps = dispatch => ({
	openDrawer: () => dispatch(openDrawer())
});

export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps)
)(Header);
