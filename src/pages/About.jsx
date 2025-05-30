import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About Job Portal</h1>
            <p className="mb-4">
                Job Portal is a leading platform connecting employers and job seekers.
                Our mission is to simplify the job search process and help companies
                find the best talent.
            </p>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
                <p>
                    Founded in 2025, Job Portal has quickly grown to become a trusted
                    resource for career development and talent acquisition. We leverage
                    modern technology to create seamless connections between employers
                    and potential employees.
                </p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                <p>
                    Our diverse team of professionals is dedicated to improving the
                    job search experience. With backgrounds in HR, technology, and
                    recruitment, we understand the challenges of the modern job market.
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p>
                    Have questions or feedback? Reach out to our support team at
                    <a href="mailto:support@jobportal.com" className="text-blue-500 ml-1">
                        support@jobportal.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default About;
