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
import { connect } from 'react-redux'
import { openDrawer } from '../../actions/Header/actionsCreators';


//export withStyles(styles, { withTheme: true })(Header);


const Header = ({open, openDrawer}) => {

    const drawerWidth = 240;

    const styles = theme => ({
        root: {
            flexGrow: 1,
            height: 'auto',
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginLeft: 12,
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing.unit * 3,
        },
    });

    return(
        <div className={styles.root}>
            <AppBar
                position="absolute"
                className={classNames(styles.appBar, open && styles.appBarShift)}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => openDrawer()}
                            className={classNames(styles.menuButton, open && styles.hide)}
                            >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="title" color="inherit" noWrap>
                            Mini variant drawer
                        </Typography>
                    </Toolbar>
            </AppBar>

            <main className={styles.content}>
                <div className={styles.toolbar} />
                <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
            </main>
        </div>
    );
}


Header.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    open: state
});

const mapDispatchToProps = dispatch => ({
    openDrawer: () => dispatch(openDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);