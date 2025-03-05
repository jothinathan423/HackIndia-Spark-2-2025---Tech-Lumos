import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, MenuItem, Container, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('freelancer');
    const [open, setOpen] = useState(true); // Set to true to open the modal by default
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
            localStorage.setItem('token', res.data.token);
            setOpen(false); // Close the modal on successful registration
            navigate(res.data.user.role === 'admin' ? '/admin-dashboard' : '/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/'); // Navigate to home or another route when the modal is closed
    };

    return (
        <Container className='pt-5'>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Register</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Password"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Role"
                            fullWidth
                            select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                            margin="normal"
                        >
                            <MenuItem value="freelancer">Freelancer</MenuItem>
                            <MenuItem value="business">Business</MenuItem>
                        </TextField>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Register
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </Container>
    );
};

export default Register;