import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import logo from "../assets/mind.png";

const Navbar = () => {
    const [userType, setUserType] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        const storedUserType = localStorage.getItem("userType");
        if (storedUserType) {
            setUserType(storedUserType);
        }
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("userType");
        setUserType(null);
        handleMenuClose();
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="Mindlancer Logo" style={{ height: 40, marginRight: 16 }} />
                </Link>

                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Mindlancer
                </Typography>

                {/* Buttons based on user type */}
                {userType === "freelancer" ? (
                    <>
                        <Button color="inherit" component={Link} to="/seek-job">
                            <WorkIcon style={{ marginRight: 5 }} /> Seek Job
                        </Button>
                        <IconButton color="inherit" onClick={handleMenuOpen}>
                            <AccountCircleIcon />
                        </IconButton>
                    </>
                ) : userType === "business" ? (
                    <>
                        <Button color="inherit" component={Link} to="/post-job">
                            <BusinessIcon style={{ marginRight: 5 }} /> Post Job
                        </Button>
                        <IconButton color="inherit" onClick={handleMenuOpen}>
                            <MoreVertIcon />
                        </IconButton>
                    </>
                ) : (
                    <>
                        {/* <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                        <Button color="inherit" component={Link} to="/register">
                            Register
                        </Button> */}
                    </>
                )}

                {/* Profile Dropdown */}
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                        Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
