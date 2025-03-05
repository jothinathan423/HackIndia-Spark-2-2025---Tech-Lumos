import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FreelancerDashboard = () => {
    const navigate = useNavigate();

    // Static jobs data
    const jobs = [
        {
            _id: '1',
            title: 'Web Development Project',
            description: 'Build a responsive website using React and Node.js.',
            budget: 1000,
        },
        {
            _id: '2',
            title: 'Mobile App Development',
            description: 'Develop a cross-platform mobile app using Flutter.',
            budget: 1500,
        },
        {
            _id: '3',
            title: 'UI/UX Design',
            description: 'Design a user-friendly interface for a SaaS product.',
            budget: 800,
        },
    ];

    const handleApply = (jobId) => {
        navigate(`/apply/${jobId}`);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Available Jobs</Typography>
            {jobs.map(job => (
                <Card key={job._id} style={{ marginBottom: '16px' }}>
                    <CardContent>
                        <Typography variant="h5">{job.title}</Typography>
                        <Typography>{job.description}</Typography>
                        <Typography>Budget: ${job.budget}</Typography>
                        <Button variant="contained" color="primary" onClick={() => handleApply(job._id)}>
                            Apply
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default FreelancerDashboard;