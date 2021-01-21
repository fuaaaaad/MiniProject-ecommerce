import React, {useContext, useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SideDrawer from './SideDrawer';
import {GlobalState} from '../../../GlobalState'
import Menu from '../icon/menu.svg'
import Close from '../icon/close.svg'
import Cart from '../icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  const [cart] = state.userAPI.cart
  const [menu, setMenu] = useState(false)

  const logoutUser = async () =>{
      await axios.get('/user/logout')
      
      localStorage.removeItem('firstLogin')
      
      window.location.href = "/";
  }

  const adminRouter = () =>{
      return(
          <>
              <li><Link to="/create_product">Create Product</Link></li>
              <li><Link to="/category">Categories</Link></li>
          </>
      )
  }

  const loggedRouter = () =>{
      return(
          <>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
          </>
      )
  }


  const styleMenu = {
      left: menu ? 0 : "-100%"
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <SideDrawer />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            E-Grocery
          </Typography>
          <Link to = '/'>   
            <a>Home</a> 
              
              </Link>


        </Toolbar>
      </AppBar>
    </div>
  );
}
