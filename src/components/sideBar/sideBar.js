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
import classNames from 'classnames';
import { connect } from 'react-redux'
import { closeDrawer } from '../../actions/Header/actionsCreators';


const SideBar = ({open, closeDrawer}) => {

    console.log('open', open);

    const styles = theme => ({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 350,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing.unit * 7,
                [theme.breakpoints.up('sm')]: {
                width: theme.spacing.unit * 9,
            },
        },
    });

    return(
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(styles.drawerPaper, true && styles.drawerPaperClose),
            }}
            open={open}
        >
            <div className={styles.toolbar}>
                <IconButton>
                    <IconButton onClick={() => closeDrawer()}>
                        {styles.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </IconButton>
            </div>

            <Divider />
            <Divider />
        </Drawer>
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
  open: state.ReducerHeader.drawer.open
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);