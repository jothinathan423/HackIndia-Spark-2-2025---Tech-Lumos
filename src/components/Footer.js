import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <Container style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
            <Typography variant="body1">© 2025 Mindlancer. All rights reserved.</Typography>
        </Container>
    );
};

export default Footer;