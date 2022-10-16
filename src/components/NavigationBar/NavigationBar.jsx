import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
//import { Link } from 'react-router-dom';

// functions for the search component of the navbar
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  // main navbar component
function NavigationBar() {
    return ( <>
        <AppBar position="static">
            <Toolbar>
                {/* APP's LOGO - Shopping cart icon with App's Name */}
                <ShoppingCartIcon sx={{mr: 1}}></ShoppingCartIcon>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    upGrad E-Shop
                </Typography>

                {/* Search Bar */}
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
                </Search>

                {/* Navigation Links */}
                <Link href="login" color="inherit" sx={{ mx: 2 }}>Login</Link>
                <Link href="signup" color="inherit" sx={{ mx: 2 }}>Sign Up</Link>
                <Link href="" color="inherit" sx={{ mx: 2 }}>Home</Link>
                <Link href="addproducts" color="inherit" sx={{ mx: 2 }}>Add Product</Link>

                {/* LOGOUT button */}
                <Button variant="contained" color="secondary">LOGOUT</Button>
            </Toolbar>
        </AppBar>
    </> );
}

export default NavigationBar;