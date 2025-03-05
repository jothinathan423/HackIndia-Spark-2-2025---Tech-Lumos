import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

const GitHubLoginPage = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [notification, setNotification] = useState({ open: false, message: '', severity: 'info' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { usernameOrEmail, password });
            localStorage.setItem('token', res.data.token);
            navigate(res.data.user.role === 'admin' ? '/admin-dashboard' : '/dashboard');
        } catch (err) {
            setNotification({ open: true, message: 'Invalid credentials', severity: 'error' });
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Sign in 
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1rem' }}>
                    <TextField
                        label="Username or email address"
                        fullWidth
                        margin="normal"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign in
                    </Button>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        
                    </Grid>
                </form>
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2">
                        New to Mindlancer? <Link href="#">Create an account</Link>
                    </Typography>
                    
                </Box>
            </Box>
            <Notification
                open={notification.open}
                message={notification.message}
                severity={notification.severity}
                onClose={() => setNotification({ ...notification, open: false })}
            />
        </Container>
    );
};

export default GitHubLoginPage;