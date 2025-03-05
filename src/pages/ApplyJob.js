import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Card, CardContent, Container } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const ApplyJob = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [coverLetter, setCoverLetter] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [timeline, setTimeline] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/proposals', {
                jobId,
                coverLetter,
                bidAmount,
                timeline,
            });
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '80px', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card style={{ width: '800px', padding: '20px' , borderRadius: '10px' }}>
                <CardContent>
                    <Typography variant="h5" align="center">Apply for Job</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Cover Letter"
                            fullWidth
                            multiline
                            rows={4}
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Bid Amount"
                            fullWidth
                            type="number"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Estimated Timeline"
                            fullWidth
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                            required
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
                            Submit Proposal
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ApplyJob;