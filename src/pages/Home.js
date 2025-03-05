import React from 'react';
import { Typography, Button } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="w-100" style={{ maxWidth: '450px' }}>
                <div className="bg-white p-4 rounded shadow">
                    <Typography variant="h4" className="text-center mb-4">
                        Welcome back
                    </Typography>

                    {/* Google Button */}
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            console.log('Google Login Success:', credentialResponse);
                            navigate('/dashboard');
                        }}
                        onError={() => {
                            console.log('Google Login Failed');
                        }}
                        useOneTap
                        render={(renderProps) => (
                            <Button
                                variant="outlined"
                                fullWidth
                                className="mb-3 p-2"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    textTransform: 'none',
                                    width: '100%',
                                }}
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    alt="Google Logo"
                                    style={{ width: '20px', height: '20px' }}
                                />
                                <span>CONTINUE WITH GOOGLE</span>
                            </Button>
                        )}
                    />

                    {/* GitHub Button */}
                    <Button 
                        variant="outlined" 
                        fullWidth 
                        className="mb-3 p-2"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            textTransform: 'none',
                            width: '100%',
                        }}
                    >
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo"
                            style={{ width: '20px', height: '20px' }}
                        />
                        <span>CONTINUE WITH GITHUB</span>
                    </Button>

                    {/* LinkedIn Button */}
                    <Button 
                        variant="outlined" 
                        fullWidth 
                        className="mb-3 p-2"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            textTransform: 'none',
                            width: '100%',
                        }}
                    >
                        <img
                            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                            alt="LinkedIn Logo"
                            style={{ width: '20px', height: '20px' }}
                        />
                        <span>CONTINUE WITH LINKEDIN</span>
                    </Button>

                    <Button 
                        variant="contained" 
                        fullWidth 
                        className="mb-2 p-2"
                        style={{ backgroundColor: '#3f51b5', textTransform: 'none', width: '100%' }}
                        component={Link} to="/login"
                    >
                        LOGIN
                    </Button>
                    <Typography variant="body2" className="text-center mb-2">
                        Forgot Password?
                    </Typography>
                    <Typography variant="body2" className="text-center">
                        Don't have an account? <a href="/register" style={{ color: '#3f51b5' }}>Sign Up</a>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Home;