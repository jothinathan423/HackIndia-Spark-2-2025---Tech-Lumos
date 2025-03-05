import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Card, CardContent, MenuItem, FormControlLabel, Checkbox } from '@mui/material';

const JobPosting = () => {
    const navigate = useNavigate();
    const [jobDetails, setJobDetails] = useState({
        title: '',
        description: '',
        skillsRequired: '',
        budget: '',
        deadline: '',
        engagementModel: 'hourly',
        isUrgent: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/jobs', jobDetails, {
                headers: { 'x-auth-token': token },
            });
            alert('Job posted successfully!');
            navigate('/business-dashboard');
        } catch (err) {
            console.error(err);
            alert('Failed to post job. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setJobDetails({
            ...jobDetails,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <Card style={{ maxWidth: 600, margin: '50px auto', padding: '20px' }}>
            <CardContent>
                <Typography variant="h4" gutterBottom>Post a Job</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Job Title"
                        fullWidth
                        name="title"
                        value={jobDetails.title}
                        onChange={handleChange}
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Job Description"
                        fullWidth
                        multiline
                        rows={4}
                        name="description"
                        value={jobDetails.description}
                        onChange={handleChange}
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Required Skills (comma-separated)"
                        fullWidth
                        name="skillsRequired"
                        value={jobDetails.skillsRequired}
                        onChange={handleChange}
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Budget"
                        fullWidth
                        type="number"
                        name="budget"
                        value={jobDetails.budget}
                        onChange={handleChange}
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Deadline"
                        fullWidth
                        type="date"
                        name="deadline"
                        value={jobDetails.deadline}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Engagement Model"
                        fullWidth
                        select
                        name="engagementModel"
                        value={jobDetails.engagementModel}
                        onChange={handleChange}
                        required
                        margin="normal"
                    >
                        <MenuItem value="hourly">Hourly</MenuItem>
                        <MenuItem value="fixed">Fixed Price</MenuItem>
                    </TextField>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="isUrgent"
                                checked={jobDetails.isUrgent}
                                onChange={handleChange}
                                color="primary"
                            />
                        }
                        label="Mark as Urgent"
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Post Job
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default JobPosting;